import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import categoryData from '../data/category.json'; 

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData.categories);
  }, []);

  return (
    <div className="category-container mt-24">
      <h1 className='font-semibold text-3xl colorChange mb-10'>Categories</h1>
      <div className="category-cards">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img
              src={category.image_link}
              alt={category.name}
              className="category-image"
            />
            <div className="category-info">
              <h2 className='colorChange font-semibold text-l'>{category.name}</h2>
              <p>{category.description}</p>
              <Link to={`/products/${category.name}`} className="btn btnColor text-white mt-2">Explore</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
