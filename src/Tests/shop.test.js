
import {render, screen} from '@testing-library/react'
import Shop from "../Pages/shop";
import CartContextProvider from "../Context/CartContext";
import { BrowserRouter } from "react-router-dom";


//  const mockedData = jest.fn();


describe('Shop', () => {
  test('load shop', () => {
    render(
     

      <CartContextProvider>
      <BrowserRouter >
      <Shop />
  
      </BrowserRouter>
    </CartContextProvider> 
    )

    setTimeout(async () => {
      const items = await screen.findAllByAltText('product-thumbnail');
      expect(items).toBeInTheDocument();
    }, 4000)
    // screen.getByRole('')

    


  })
})
