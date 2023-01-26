import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopBar } from "./ShopBar";
import { Shop } from "../product/ProductList";
import { Cart } from "../cart/Cart";
import { ShopContextProvider } from "../../context/shop-context";

function ShopContainer() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <ShopBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default ShopContainer;
