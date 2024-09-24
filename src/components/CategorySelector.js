import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions';

const categories = ['popular', 'technology', 'science', 'sports', 'gaming'];

const CategorySelector = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(fetchPosts(category));  // Fetch posts based on selected category
  };

  return (
    <div className="category-container">
      <h2>Select a Category</h2>
      <div className="category-selector">
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => handleCategoryClick(category)} 
            className="category-button"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
