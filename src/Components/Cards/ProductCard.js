/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../../Context/CartContext';


function ProductCard({_product}) {
  const {
    addProduct,
    cartItems,
    increase,
    removeProduct,
    decrease,
  } = useContext(CartContext);

  const [product, setProduct] = useState({});
  

  const InCart = (product) => {

    return !!cartItems?.find((item) => item?.idDrink === product?.idDrink);
  };

  const singleItem = (product) => {
    return cartItems?.find((item) => item?.idDrink === product?.idDrink);
  };

  const Item = singleItem(product);

  const remove = (product) => {
    if (Item?.quantity <= 0) {
      removeProduct(product);
      console.log("list removeProduct");
    }
  };

  useEffect(() => {
    remove(product)
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [Item?.quantity, ])

  useEffect(() => {
    let max = 5000

    setProduct({..._product, price: Math.floor(Math.random() * (max + 1))});

  }, [])

  return (
    
    <div
   
    className={`card `}
  >
    <a  href={`/products/${product.strDrink}`}>
     <div
          className={`img-area `}
        >
          {product.strDrinkThumb  ? (
            <img
              className=""
              src={product.strDrinkThumb}
              alt='product-thumbnail'
              loading="lazy"
            />
          ) : (
            <img
              alt="placeholder"
              className="crop mx-auto"
              src="http://placehold.jp/3d4070/ffffff/x.png"
              loading="lazy"
            />
          )}
        </div>
        <div className="title-area">
          <h4 className="">
            {product.strDrink} 
          </h4>
          <h5 className>
            {product.price}
          </h5>
        </div>
     
    </a>
    <div
      className={` buttons`}
    >
      {InCart(product)   ? (
        <div
          className={``}
        >
          <div  data-testid="btns" className=" button-area  ">
            <button
              onClick={() => {
                decrease(product);
              }}
              data-testid="decrement"
              data-action="decrement"
              className=""
            >
              <span className="">− </span>
            </button>
            <span data-testid="counter-area"  className="counter" >{Item?.quantity}</span>
            
            <button
              onClick={() => {
                increase(product);
              }}
              data-testid="increment"
              data-action="increment"
              className=""
            >
              <span className="">+</span>
            </button>
          </div>
        </div>
      ) :  (
        <div
          className={` button-area`}
        >
          <button
            type='button'
            data-testid="add-to-cart"
            onClick={() => {
              addProduct(product);
              
            }}
            
            className=""
          >
            Add to cart
          </button>
        </div>
      )}
    </div>
  </div>
  )
}

export default ProductCard