import React, { useEffect, useState } from "react";
import "./MyOrder.css";

function MyOrder() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:8080/orders/allOrders");
        if (!response.ok) {
          throw new Error(`Failed to fetch orders. Status: ${response.status}`);
        }

        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("text/html")) {
          throw new Error("Received unexpected HTML response. Check server logs.");
        }

        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="my-order-page">
      <h2>My Orders</h2>
      <div className="orders-container">
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div className="order-card" key={order.oId}>
              <h3>Product Name: {order.productName || "Unknown"}</h3>
              <p>Shipping Address: {order.address || "Unknown"}</p>
              <p>Mobile Number: {order.mobileNo || "N/A"}</p>
              <p>Total Price: ${order.totalPrice ?? "N/A"}</p>
              <p>Payment Method: {order.paymentMethod || "Unknown"}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyOrder;
