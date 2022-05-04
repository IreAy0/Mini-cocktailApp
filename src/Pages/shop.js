import React, {useEffect} from 'react'
import ProductCard from '../Components/Cards/ProductCard';
import Layout from '../Components/Layout';
import {
  getProducts,
  
} from "../utils/api";


function Shop() {
 
  const [products, setProducts] = React.useState([]);



  useEffect(() => {
     getProducts()?.then(res => { 
        setProducts(res)
      });
  }, [])



  return (
    <Layout className="App">
      
      <div className='products container'>
        {products?.drinks?.length > 0 ? <> {products?.drinks?.map((product, index) => (
          <ProductCard data-testid='product-area'   _product={product}/>

        ))}</> : "Loading..." }
       

      </div>
    </Layout>
  )
}

export default Shop