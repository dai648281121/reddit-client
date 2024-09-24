import React from 'react';
import ReactDOM from 'react-dom/client';  
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// Get the root element
const rootElement = document.getElementById('root');

// Use createRoot to create a new React root
const root = ReactDOM.createRoot(rootElement);

// Render the App component, wrapped with Provider to supply the Redux store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
