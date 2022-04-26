import { Fragment, lazy, Suspense, useContext } from 'react';
// import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

// import logo from './logo.svg';
import './App.scss';
import Shop from './Pages/shop';
import Cart from './Pages/cart';
import Home from './Pages/Home';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from './Context/CartContext';

function App() {
  const { itemCount } = useContext(CartContext)

  return (
   
    <BrowserRouter>
          <header
        className={``}
      >
        <nav data-testid="navbar" className="container  ">
          
            <Link data-testid="home-link" to="/">
              
                Logo
             
            </Link>
           
            <ul>
              <li>
              <Link data-testid="shop-link" to={"/shop"} >
                
                Shop
               
            </Link>
              </li>
             
              <li>  
                <Link to="/cart" className="cart-icon relative inline-block">
               
                 
                    <FiShoppingCart className="icons"/>
                    <span
                      className="absolute top-0 right-0 inline-flex items-center 
                  justify-center px-1 py-1 text-xs font-bold leading-none 
                  text-red-100 transform -translate-x-9	 -translate-y-1/2 
                  bg-red-600 rounded-full"
                    >
                      {itemCount}
                      
                    </span>
                    
                 
               
              </Link></li>
              
              
            
            </ul>
          
        </nav>
          </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
  </Routes>
  
  </BrowserRouter>
   

  );
}

export default App;
