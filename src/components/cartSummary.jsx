import css from "../css/cart.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();

  // Function to calculate final price after discount
  const calculateFinalPrice = (price, discount) => {
    const numericPrice = parseFloat(price.replace(/,/g, "")); // Remove commas
    const numericDiscount = parseFloat(discount.replace("%", "")); // Remove % sign
    return numericPrice - (numericPrice * numericDiscount) / 100; // Apply discount
  };

  // Calculate total price
  const totalMRP = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace(/,/g, "")),
    0
  );
  const totalDiscount = cartItems.reduce(
    (acc, item) =>
      acc +
      (parseFloat(item.price.replace(/,/g, "")) *
        parseFloat(item.discount.replace("%", ""))) /
        100,
    0
  );
  const finalPayment = totalMRP - totalDiscount; // Final price after discount

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert(
        "Your cart is empty !! Please add items to the cart before placing an order."
      );
      return;
    } else {
      // Navigate to the place order page
      navigate("/placeOrder");
    }
  };

  return (
    <>
      <div className={css.cartContainer}>
        {/* <div className="bag-details-container"> */}
        <div className={css.priceHeader}>
          PRICE DETAILS ({cartItems.length} Items)
        </div>

        <div className={css.priceItem}>
          <span className={css.priceItemTag}>Total MRP</span>
          <span className={css.priceItemValue}>
            ₹{totalMRP.toLocaleString()}
          </span>
        </div>

        <div className={css.priceItem}>
          <span className={css.priceItemTag}>Discount on MRP</span>
          <span className={css.priceItemValue}>
            -₹{totalDiscount.toLocaleString()}
          </span>
        </div>

        <div className={css.priceItem}>
          <span className={css.priceItemTag}>Convenience Fee</span>
          <span className={css.priceItemValue}>₹99</span>
        </div>

        <hr />

        <div className="price-footer">
          <div className={css.priceItem}>
            <span className={css.priceItemTag}>Total Amount</span>
            <span className={css.priceItemValue}>
              ₹{(finalPayment + 99).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <button className={css.button} onClick={handlePlaceOrder}>
        Let's Order !
      </button>
      {/* </div> */}
    </>
  );
};
export default CartSummary;
