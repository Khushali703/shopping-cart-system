import { useState } from "react";
import css from "../css/placeOrder.module.css";
import CheckOut from "./checkout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirm = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, mobile, address, city } = formData;
    if (!firstName || !lastName || !email || !mobile || !address || !city) {
      alert("⚠️ Please fill out all the fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("⚠️ Invalid email format!!!");
      return;
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }

    setConfirm(true);

    setTimeout(() => {
      setConfirm(false);
      navigate("/home");
    }, 3000);
    dispatch(cartActions.clearCart());
  };

  return (
    <>
      <div className={css.heading}>
        <p>MAKE IT YOURS !!</p>
      </div>

      <div className={css.container}>
        <form className="row g-3">
          <div className="col-sm-6">
            <label for="first name" className={`form-label ${css.label}`}>
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              aria-label="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col-sm-6">
            <label for="last name" className={`form-label ${css.label}`}>
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              aria-label="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="col-6">
            <label for="inputEmail4" className={`form-label ${css.label}`}>
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label for="mobile number" className={`form-label ${css.label}`}>
              Mobile Number
            </label>
            <input
              type="tel"
              className="form-control"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <label for="inputAddress" className={`form-label ${css.label}`}>
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="1234 Main St"
            />
          </div>

          <div className="col-md-12">
            <label for="inputCity" className={`form-label ${css.label}`}>
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className={`form-check ${css.check}`}>
            <input
              className={`form-check-input ${css.checkInput}`}
              type="checkbox"
              value=""
              id="checkChecked"
              defaultChecked
            />
            <label
              className={`form-check-label ${css.cContent}`}
              for="checkChecked"
            >
              Cash on Delivery
            </label>
          </div>

          <div className="col-12">
            <button
              type="submit"
              className={`btn btn-primary ${css.button}`}
              onSubmit={handleConfirm}
              onClick={handleConfirm}
            >
              Get Yours !
            </button>
          </div>
        </form>
      </div>

      {confirm && <CheckOut />}
    </>
  );
};
export default PlaceOrder;
