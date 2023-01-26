import { BrowserRouter, Switch, Route} from "react-router-dom";
import { ShopBar } from "./ShopBar";
import { Shop } from "../product/ProductList";
import { Cart } from "../cart/Cart";
import { ShopContextProvider } from "../context/shop-context";

function ShopContainer() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <ShopBar />
          <Switch>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Switch>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default ShopContainer;
