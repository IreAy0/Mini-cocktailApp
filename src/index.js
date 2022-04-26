import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react';
import CartContextProvider from './Context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CartContextProvider>
    <App />
    </CartContextProvider>
  </>
);
