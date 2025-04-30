import { useSelector } from "react-redux";
import css from "../css/cart.module.css";
import CartItems from "../components/cartItems";
import CartSummary from "../components/cartSummary";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <main>
      <div className={css.cartPage}>
        <div className={css.cartItemsContainer}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItems key={item.id} item={item} />)
          ) : (
            <p className={css.msg}>Nothing in Your Cart !!</p>
          )}
        </div>
        <div className={css.cartSummary}>
          <CartSummary />
        </div>
      </div>
    </main>
  );
};
export default Cart;
