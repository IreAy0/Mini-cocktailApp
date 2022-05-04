import {render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../Components/Cards/ProductCard';
import CartContextProvider from '../Context/CartContext';

const mockedData = jest.fn();


describe('product card', () => {
  it('should trigger add btn', () => {
    render(
     

<CartContextProvider>
<ProductCard _product={mockedData}/>
</CartContextProvider>

    );
    const getAdd = screen.getByRole('button', {name: 'Add to cart'});
    // const getAdd = screen.getByTestId('add-to-cart');
    // const getQuantity = screen.getByTestId('counter-area');
    // const getCart = screen.getByTestId('cart-icon');
    fireEvent.click(getAdd);
    // const geticon = screen.getByTestId('cart-icon');
    // expect(getQuantity).toBeInTheDocument();
// screen.getByRole('')
  })
})
