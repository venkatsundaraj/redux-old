import classes from "./CartItem.module.css";

import { useDispatch } from "react-redux";

import { CartItemActions } from "../../store/cart-items";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, key, id } = props.item;

  const itemReduceHandler = function () {
    dispatch(CartItemActions.removeItemHandler(id));
  };

  const itemAddHandler = function () {
    dispatch(
      CartItemActions.addItemHandler({
        title,
        quantity,
        total,
        price,
        key,
        id,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={itemReduceHandler}>-</button>
          <button onClick={itemAddHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
