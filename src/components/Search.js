import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPosts } from '../redux/actions';

const Search = () => {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('relevance'); // Sort by relevance by default
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(searchPosts(query, sort)); 
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        {/* search box */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
        />
        
        {/* sort opstions */}
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="hot">Hot</option>
          <option value="new">New</option>
        </select>

        {/* submit button */}
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
