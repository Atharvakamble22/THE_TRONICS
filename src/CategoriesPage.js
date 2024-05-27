import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesPage.css';

const categories = [
  { name: 'Grocery' },
  { name: 'Mobiles' },
  { name: 'Fashion' },
  { name: 'Electronics' },
  { name: 'Furniture' },
];

const CategoriesPage = () => (
    <div className="categories-page">
    <h2>Categories</h2>
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          <Link to={`/categories/${category.name.toUpperCase()}`}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default CategoriesPage;
