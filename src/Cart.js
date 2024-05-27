import React, { useEffect, useState } from "react";
import "./Cart.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Cart() {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://localhost:8080/orders/allOrders");
        if (!response.ok) {
          const contentType = response.headers.get("Content-Type");
          if (contentType && contentType.includes("text/html")) {
            throw new Error("Received unexpected HTML response. Check the server.");
          }
          throw new Error(`Failed to fetch orders. Status: ${response.status}`);
        }

        const data = await response.json();
        // Sort orders by order ID or timestamp in ascending order of entry
        const sortedCart = data.sort((a, b) => a.oId - b.oId);

        setCart(sortedCart);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const determineStatus = (item) => {
    switch (item.paymentMethod) {
      case "Credit Card":
      case "Net Banking":
        return "Processing";
      case "Through QR Code":
        return "Delivered";
      case "UPI Payment":
        return "Awaiting Confirmation";
      case "Cash on Delivery":
        return "Pending";
      default:
        return "Unknown";
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="cart-page">
      <h2 className="my-4">My Orders</h2>
      <div className="row">
        {cart.length === 0 ? (
          <div className="col-12">
            <p className="text-center">Your cart is empty.</p>
          </div>
        ) : (
          <>
            {cart.slice(0, 5).map((item) => (
              <div className="col-lg-4 col-md-6 mb-4" key={item.oId}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{item.productName}</h5>
                    <p className="card-text">Price: ${item.totalPrice !== undefined ? item.totalPrice.toFixed(2) : "N/A"}</p>
                    <p className="card-text">Mobile No.: {item.mobileNo ?? "N/A"}</p>
                    <p className="card-text">Payment Method: {item.paymentMethod ?? "Unknown"}</p>
                    <p className="card-text">Shipping Address: {item.address ?? "N/A"}</p>
                    <p className="card-text">Status: {determineStatus(item)}</p>
                  </div>
                </div>
              </div>
            ))}
            {cart.slice(5).map((item) => (
              <div className="col-lg-4 col-md-6 mb-4" key={item.oId}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{item.productName}</h5>
                    <p className="card-text">Price: ${item.totalPrice !== undefined ? item.totalPrice.toFixed(2) : "N/A"}</p>
                    <p className="card-text">Mobile No.: {item.mobileNo ?? "N/A"}</p>
                    <p className="card-text">Payment Method: {item.paymentMethod ?? "Unknown"}</p>
                    <p className="card-text">Shipping Address: {item.address ?? "N/A"}</p>
                    <p className="card-text">Status: {determineStatus(item)}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
