import css from "../css/navbar.module.css";
import { FaCartPlus } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <>
      <header
        className={`d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom ${css.header}`}
      >
        <Link to="/home" className={css.text}>
          <div className={css.web_name}>Smart view</div>
        </Link>

        <div className={css.action_bar}>
          <div className={css.profile}>
            <IoMdPerson />
            {/* <span className="action_name">Profile</span> */}
          </div>

          <Link to="/cart" className={css.cart}>
            <span
              className={`position-relative top-0 start-100 translate-middle badge rounded-pill bg-danger ${css.badge}`}
            >
              {cart.length}
            </span>
            <FaCartPlus />
          </Link>
        </div>
      </header>
    </>
  );
};
export default Navbar;
