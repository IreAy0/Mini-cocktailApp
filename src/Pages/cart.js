import React, { useContext, useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import { CartContext } from '../Context/CartContext';

function Cart() {
  const { cartItems,checkout, removeProduct, total, increase, decrease, handleCheckout } =
  useContext(CartContext);
 
const [alertAdd, setAlertAdd] = useState(false);
console.log(cartItems);
useEffect(() => {
  const interval = setInterval(() => {
    setAlertAdd(false);
  }, 5000);
  return () => clearInterval(interval);
}, []);
const subTotal = (qty, price) => {
  let total = Math.round((qty * price).toFixed(2));
  return total;
}
  return (
   <Layout >
     <div className='container'>
     <div className="cart">
            <div className="cart-container ">
              
                <div className=" ">
                  {cartItems?.length > 0 ? (
                   
                      <div class="cart-area ">
                        {cartItems?.map((product, index) => (
                          <div class="cart-card-area ">
                            <div class="cart-card ">
                              <div class="img-area 4">
                                
                                  <img
                                    className=" 	   "
                                    src={product.strDrinkThumb}
                                    alt={product.strDrink}
                                    loading="lazy"

                                  />
                                
                              </div>
                              {product.quantity <= 0 && removeProduct(product)}
                              <div class="product-detail-area ">
                                <div class=" product-detail">
                                  
                                   
                                    <p class="product-name ">
                                      {product.strDrink}
                                    </p>
                                  
                                
                                  <p
                                   
                                    class="product-price "
                                  >
                                    ${product.price}
                                  </p>
                                </div>
                                <div class="product-cart-action ">
                                  <div 
                                    class="buttons "
                                  >
                                   
                                      <div class="button-area  ">
                                        <button
                                          onClick={() => {
                                            decrease(product);
                                          }}
                                          data-action="decrement"
                                          class=" border text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                        >
                                          <span class="m-auto text-2xl font-thin">
                                            −
                                          </span>
                                        </button>
                                        <input
                                          type="text"
                                          class=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                          name="custom-input-number"
                                          value={product.quantity}
                                        ></input>
                                        <button
                                          onClick={() => {
                                            increase(product);
                                          }}
                                          data-action="increment"
                                          class="border text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                        >
                                          <span class="m-auto text-2xl font-thin">
                                            +
                                          </span>
                                        </button>
                                      </div>
                                    
                                  </div>
                                  <p
                                    class="subtotal "
                                  >
                                  <span>Subtotal:</span>   ${subTotal(product.quantity, product.price)}
                                  </p>

                                  <div
                                    class="remove-btn "
                                  >
                                   
                                    <span
                                      onClick={() => {
                                        removeProduct(product);
                                      }}
                                      className=" "
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className=""
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                      </svg>
                                      <span>Remove</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                       
                       <div className='checkout-area'>
                         Total: <div className='cart-total'>
                          ${Math.round(total)}
                          </div>
                            <div class="checkout-btn flex justify-between items-end lg:w-2/6">
                             
                              <button
                              onClick={handleCheckout}
                                className="h-12 w-1/2 ml-1 text-center justify-center"
                              >
                                Checkout
                              </button>
                            </div>
                       </div>
                       
                      </div>
                   
                  ) : (
                    <p className="text-center">{checkout ? 'Thank you for Shopping with us' : 'Cart is Empty'}</p>
                  )}
                </div>
             
            </div>
          </div>
     </div>
   </Layout>
  )
}

export default Cart