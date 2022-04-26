import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import Shop from "../Pages/shop";
import CartContextProvider from "../Context/CartContext";



test('should render cocktails', async  () => {
  render (
  <CartContextProvider>
  <Shop />
  </CartContextProvider> 
  )

 })