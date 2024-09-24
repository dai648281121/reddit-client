import { configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers';  // 从 reducers.js 中导入

const store = configureStore({
  reducer: {
    posts: postReducer,  // 将 postReducer 添加到 store 的根
  },
});

export default store;
