import { BrowserRouter, Switch, Route, useRouteMatch} from "react-router-dom";
import { ShopBar } from "./ShopBar";
import { Shop } from "../product/ProductList";
import { Cart } from "../cart/Cart";
import { ShopContextProvider } from "../context/shop-context";

function ShopContainer() {
  const match = useRouteMatch()
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <ShopBar />
          <Switch>
            <Route exact path={match.url}><Shop/></Route>
            <Route  path={`${match.url}/:cart`}><Cart/></Route>
          </Switch>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default ShopContainer;
