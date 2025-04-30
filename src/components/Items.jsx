import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import css from "../css/items.module.css";
const Items = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);
  const cart = useSelector((store) => store.cart);

  const handleAddToCart = (item) => {
    dispatch(cartActions.addToCart(item));
  };
  const handleRemoveFromCart = (id) => {
    dispatch(cartActions.removeFromCart({ id }));
  };

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => {
          const isInCart = cart.some((cartItem) => cartItem.id === item.id); // Check if item is in cart

          return (
            <div className="col-4" key={item.id}>
              {" "}
              {/* Added key prop */}
              <div className={css.itemsContainer}>
                <div className={css.imageContainer}>
                  <img
                    className={css.image}
                    src={item.image}
                    alt="item image"
                  />
                </div>
                <div className={css.info}>
                  <div className={css.rating}>{item.rating} / 5 ⭐</div>
                  <div className={css.name}>{item.name}</div>
                  <div className={css.brand}>Brand : {item.brand}</div>
                  <span className={css.memory}>Memory : {item.memory}</span>
                  <div className={css.size}>Size : {item.screen_size}</div>
                  <div className={css.prize}>
                    <span className={css.price}>Rs {item.price}</span>
                    <span className={css.discount}>(${item.discount} OFF)</span>
                  </div>
                </div>

                {isInCart ? (
                  <button
                    className={css.button}
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Discard Item
                  </button>
                ) : (
                  <button
                    className={css.button}
                    onClick={() => handleAddToCart(item)}
                  >
                    Get This Item
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Items;
