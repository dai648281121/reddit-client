import React from 'react';
import './App.css';
import PostList from './components/PostList';
import CategorySelector from './components/CategorySelector';
import Search from './components/Search';  // 引入Search组件

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reddit Client</h1>
      </header>
      <Search /> {/* 添加搜索框 */}
      <CategorySelector />
      <PostList /> {/* 直接展示帖子列表 */}
    </div>
  );
}

export default App;
