import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPosts } from '../redux/actions';

const Search = () => {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('relevance'); // 默认按相关性排序
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(searchPosts(query, sort)); // 传递 query 和 sort 参数
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        {/* 搜索框 */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
        />
        
        {/* 排序选项 */}
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="hot">Hot</option>
          <option value="new">New</option>
        </select>

        {/* 提交按钮 */}
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
