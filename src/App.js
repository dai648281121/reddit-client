// src/App.js
import React from 'react';
import './App.css';
import PostList from './components/PostList';
import CategorySelector from './components/CategorySelector';
import Search from './components/Search';  
import Header from './components/Header';  

function App() {
  return (
    <div className="App">
      <Header title="RedditMinimal" subtitle="Browse the top posts！" /> {/* Using the Header component */}
      <Search /> {/* Adding the search bar */}
      <CategorySelector /> {/* Category selector for filtering posts */}
      <PostList /> {/* Display the list of posts directly */}
    </div>
  );
}

export default App;
