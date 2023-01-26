import { Route, Switch } from 'react-router-dom'
import  NavBar  from './navbar/NavBar';
import Landing from "./landing/Landing";
import Gallery from "./gallery/Gallery";
import { Shop } from "./pages/shop/shop.js";
import { ShopContextProvider } from "./context/shop-context.js";
import '../dist/output.css';
import OurServices from "./ourservices/OurServices";
import ContactUs from "./contactus/ContactUs";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <NavBar/>
        <Switch>
          <Route path="/gallery"><Gallery/></Route>
          <Route path="/services"><OurServices/></Route>               
          <Route path="/shop"><Shop/></Route>
          <Route path="/contacts"><ContactUs/></Route>
          <Route exact path="/"><Landing/></Route>
        </Switch>
      </ShopContextProvider>
    </div>
  );
}

export default App;
