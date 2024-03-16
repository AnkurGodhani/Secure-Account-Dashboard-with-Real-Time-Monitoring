import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const store1 = configureStore({
  reducer:rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <React.StrictMode>
      <Provider store={store1}>
        <BrowserRouter>
        <App />
        <Toaster/>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
 
  
);


