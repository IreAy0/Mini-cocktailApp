import React from 'react'
import Layout from '../Components/Layout'

function Home() {
  return (
    <>
    <Layout>
      <div  className=' hero-section'>
      <div className='container'>
        <div className='header-text'>
        <h1>Welcome to my Cocktail App</h1>
        <button  className='shop-btn'>
          <a href='/shop'>Shop Now</a>
        </button>
    </div>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Home