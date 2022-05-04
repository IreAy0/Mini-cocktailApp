// import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

// import logo from './logo.svg';
import './App.scss';
import Shop from './Pages/shop';
import Cart from './Pages/cart';
import Home from './Pages/Home';


function App() {

  return (
   
    <BrowserRouter>
         
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
  </Routes>
  
  </BrowserRouter>
   

  );
}

export default App;
