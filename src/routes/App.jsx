import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Items from "../components/Items";
import Cart from "./cart";
import PlaceOrder from "../components/placeOrder";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Items />
                <Footer />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Items />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <Cart />
                <Footer />
              </>
            }
          />
          <Route
            path="/placeOrder"
            element={
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
