import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import './CategoryDetailPage.css'; 

export const categoryProducts = {
  mobiles: [
    {
      name: 'iPhone 13',
      price: 999,
      image: '/iphone-13.jpg',
      rating: 4.5,
    },
    {
      name: 'Samsung Galaxy S22',
      price: 1099,
      image: '/samsung-galaxy-s22.jpg',
      rating: 4.7,
    },
    {
      name: 'Google Pixel 6',
      price: 799,
      image: '/google-pixel-6.jpg',
      rating: 4.6,
    },
    {
      name: 'OnePlus 9 Pro',
      price: 899,
      image: '/oneplus-9-pro.jpg',
      rating: 4.4,
    },
    {
      name: 'Xiaomi Mi 11',
      price: 799,
      image: '/xiaomi-mi-11.jpg',
      rating: 4.3,
    },
    {
      name: 'OnePlus Nord 2',
      price: 499,
      image: '/oneplus-nord-2.jpg',
      rating: 4.6,
    },
    {
      name: 'Samsung Galaxy Z Fold 3',
      price: 1799,
      image: '/samsung-galaxy-z-fold-3.jpg',
      rating: 4.8,
    },
    {
      name: 'Google Pixel 5a',
      price: 449,
      image: '/google-pixel-5a.jpg',
      rating: 4.4,
    },
    // Add more mobile products here
  ],
  headphones: [
    {
      name: 'Sony WH-1000XM4',
      price: 349,
      image: '/sony-wh-1000xm4.jpg',
      rating: 4.8,
    },
    {
      name: 'AirPods Pro',
      price: 249,
      image: '/airpods-pro.jpg',
      rating: 4.6,
    },
    {
      name: 'Bose QuietComfort 45',
      price: 329,
      image: '/bose-quietcomfort-45.jpg',
      rating: 4.7,
    },
    {
      name: 'Jabra Elite 85t',
      price: 229,
      image: '/jabra-elite-85t.jpg',
      rating: 4.5,
    },
    {
      name: 'Sony WF-1000XM4',
      price: 279,
      image: '/sony-wf-1000xm4.jpg',
      rating: 4.7,
    },
    {
      name: 'Sennheiser Momentum True Wireless 2',
      price: 299,
      image: '/sennheiser-momentum-true-wireless-2.jpg',
      rating: 4.5,
    },
    {
      name: 'Beats Studio Buds',
      price: 149,
      image: '/beats-studio-buds.jpg',
      rating: 4.4,
    },
    {
      name: 'Audio-Technica ATH-M50xBT',
      price: 199,
      image: '/audio-technica-ath-m50xbt.jpg',
      rating: 4.6,
    },
    // Add more headphone products here
  ],
  tablets: [
    {
      name: 'iPad Pro',
      price: 799,
      image: '/ipad-pro.jpg',
      rating: 4.7,
    },
    {
      name: 'Samsung Galaxy Tab S8',
      price: 649,
      image: '/samsung-galaxy-tab-s8.jpg',
      rating: 4.5,
    },
    {
      name: 'Microsoft Surface Pro 7',
      price: 899,
      image: '/microsoft-surface-pro-7.jpg',
      rating: 4.6,
    },
    {
      name: 'Amazon Fire HD 10',
      price: 149,
      image: '/amazon-fire-hd-10.jpg',
      rating: 4.3,
    },
    {
      name: 'Lenovo Tab P11 Pro',
      price: 499,
      image: '/lenovo-tab-p11-pro.jpg',
      rating: 4.5,
    },
    {
      name: 'Huawei MatePad Pro',
      price: 649,
      image: '/huawei-matepad-pro.jpg',
      rating: 4.4,
    },
    {
      name: 'Google Pixel Slate',
      price: 599,
      image: '/google-pixel-slate.jpg',
      rating: 4.2,
    },
    {
      name: 'Samsung Galaxy Tab A7',
      price: 229,
      image: '/samsung-galaxy-tab-a7.jpg',
      rating: 4.1,
    },
    // Add more tablet products here
  ],
  chargers: [
    {
      name: 'Anker PowerCore 10000',
      price: 29,
      image: '/anker-powercore-10000.jpg',
      rating: 4.4,
    },
    {
      name: 'RAVPower Portable Charger 20000mAh',
      price: 49,
      image: '/ravpower-portable-charger.jpg',
      rating: 4.6,
    },
    {
      name: 'Belkin Boost Charge Power Bank 10K',
      price: 39,
      image: '/belkin-boost-charge-power-bank-10k.jpg',
      rating: 4.5,
    },
    {
      name: 'Samsung 25W USB-C Super Fast Charging Wall Charger',
      price: 29,
      image: '/samsung-25w-usb-c-charger.jpg',
      rating: 4.7,
    },
    {
      name: 'Aukey USB C Charger',
      price: 25,
      image: '/aukey-usb-c-charger.jpg',
      rating: 4.6,
    },
    {
      name: 'Ravpower 30W 2-Port Fast Charger',
      price: 19,
      image: '/ravpower-30w-2-port-fast-charger.jpg',
      rating: 4.5,
    },
    {
      name: 'Zendure SuperTank 20000mAh',
      price: 89,
      image: '/zendure-supertank-20000mah.jpg',
      rating: 4.8,
    },
    {
      name: 'Anker PowerPort Atom III Slim',
      price: 35,
      image: '/anker-powerport-atom-iii-slim.jpg',
      rating: 4.6,
    },
    // Add more charger products here
  ],
  watches: [
    {
      name: 'Apple Watch Series 7',
      price: 399,
      image: '/apple-watch-series-7.jpg',
      rating: 4.9,
    },
    {
      name: 'Samsung Galaxy Watch 4',
      price: 349,
      image: '/samsung-galaxy-watch-4.jpg',
      rating: 4.7,
    },
    {
      name: 'Fitbit Versa 3',
      price: 229,
      image: '/fitbit-versa-3.jpg',
      rating: 4.6,
    },
    {
      name: 'Garmin Forerunner 945',
      price: 599,
      image: '/garmin-forerunner-945.jpg',
      rating: 4.8,
    },
    {
      name: 'Amazfit GTS 2',
      price: 179,
      image: '/amazfit-gts-2.jpg',
      rating: 4.5,
    },
    {
      name: 'Huawei Watch GT 2 Pro',
      price: 299,
      image: '/huawei-watch-gt-2-pro.jpg',
      rating: 4.4,
    },
    {
      name: 'Fossil Gen 6',
      price: 299,
      image: '/fossil-gen-6.jpg',
      rating: 4.6,
    },
    {
      name: 'TicWatch Pro 3',
      price: 299,
      image: '/ticwatch-pro-3.jpg',
      rating: 4.5,
    },
    // Add more watch products here
  ],
};

const CategoryDetailPage = () => {
  const { categoryName } = useParams();
  const products = categoryProducts[categoryName.toLowerCase()];

  return (
    <div className="category-detail-page">
      <div className="product-card-container">
        {products.slice(0, 10).map((product, index) => (
          <Link
            key={index}
            to={`/order/${categoryName.toUpperCase()}/${product.name.toUpperCase()}?price=${product.price}`}
            className="product-link"
          >
            <Card className="product-card">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Card.Text>Rating: {product.rating}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailPage;
