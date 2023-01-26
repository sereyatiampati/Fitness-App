import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Navbar  from './navbar/NavBar';
import { Shop } from "./pages/shop/shop.js";
import { Cart } from "./pages/cart/cart.js";
import { ShopContextProvider } from "./context/shop-context.js";
import Home from "./home/Home";
import '../dist/output.css';
// import OurServices from "./ourservices/OurServices";
import Gallery from "./gallery/Gallery";
import ContactUs from "./contactus/ContactUs";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Home />
        <Gallery />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        <ContactUs/>
      </ShopContextProvider>
    </div>
  );
}

export default App;
