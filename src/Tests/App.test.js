import { fireEvent, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import CartContextProvider from '../Context/CartContext';
import App from '../App';

it ('should render the home page', async () => {

 const {container } =  render(
  <CartContextProvider>
    
  <App />

  </CartContextProvider>
  
  ) 
  const navbar = screen.getByTestId('navbar')
  const Home_Link = screen.getByTestId('home-link')

  // expect(navbar).toContainElement(Home_Link)

  expect(container.innerHTML).toMatch('Welcome to my Cocktail App')


})

