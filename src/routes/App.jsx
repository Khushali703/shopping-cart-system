import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Items from "../components/Items";
import Cart from "../components/cart";
import PlaceOrder from "../components/placeOrder";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            elements={
              <>
                <Navbar />
                <Items />
                <Footer />
              </>
            }
          />
          <Route
            path="/home"
            elements={
              <>
                <Navbar />
                <Items />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            elements={
              <>
                <Navbar />
                <Cart />
                <Footer />
              </>
            }
          />
          <Route
            path="/placeOrder"
            elements={
              <>
                <Navbar />
                <PlaceOrder />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
