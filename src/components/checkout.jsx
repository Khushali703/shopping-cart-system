import css from "../css/checkout.module.css";

const CheckOut = () => {
  return (
    <div>
      <div className={css.popupOverlay}>
        <div className={css.popupContent}>
          <h4>🎉 Thank you!</h4>
          <h4>Your order has been placed successfully.</h4>
          <p>We will contact you soon.</p>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
