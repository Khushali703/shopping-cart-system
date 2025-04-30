import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
