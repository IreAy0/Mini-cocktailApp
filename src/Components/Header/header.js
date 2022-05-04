import React, { useContext } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';

function Header() {
  const { itemCount } = useContext(CartContext)

  return (
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
            <Link to="/cart"  className="cart-icon relative inline-block">
           
             
                <FiShoppingCart className="icons"/>
                <span 
                test-dataid="cart-icon"
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
  )
}

export default Header