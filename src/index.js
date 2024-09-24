import React from 'react';
import ReactDOM from 'react-dom/client';  // 注意这里的引入
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// 获取 root 节点
const rootElement = document.getElementById('root');

// 使用 createRoot 创建新的 React 根节点
const root = ReactDOM.createRoot(rootElement);

// 渲染 App 组件，并用 Provider 包裹以提供 Redux store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
