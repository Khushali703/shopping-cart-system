import css from "../css/cart.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { cartActions } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(cartActions.removeFromCart({ id: item.id }));
  };

  return (
    <>
      <div className={css.itemsContainer}>
        <div className={css.close} onClick={handleRemoveFromCart}>
          <IoCloseSharp />
        </div>
        <div className={css.imageContainer}>
          <img className={css.image} src={item.image} alt="item image" />
        </div>

        <div className={css.info}>
          <div className={css.rating}>{item.rating} / 5 ⭐</div>
          <div className={css.name}>{item.name}</div>
          <div className={css.brand}>Brand : {item.brand}</div>
          <span className={css.memory}>Memory : {item.memory}</span>
          <div className={css.size}>size : {item.screen_size}</div>
          <div className={css.prize}>
            <span className={css.price}>Rs {item.price}</span>
            <span className={css.discount}>(${item.discount} OFF)</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItems;
