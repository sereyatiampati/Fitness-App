import './App.css';
// import Home from "./home/Home";
import '../dist/output.css';
// import OurServices from "./ourservices/OurServices";
import Gallery from "./gallery/Gallery";
// import ContactUs from "./contactus/ContactUs";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Gallery />

      {/* <OurServices />
      <Gallery />
      <ContactUs /> */}
    </div>
  );
}

export default App;
