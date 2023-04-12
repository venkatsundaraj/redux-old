import classes from "./CartButton.module.css";

import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const isShownCart = useSelector((state) => state.cart.isLoggedIn);
  const totalAmount = useSelector((state) => state.cartItem.totalAmount);
  // console.log(totalAmount);

  const showCartHandler = function () {
    dispatch(cartActions.logIn());
  };
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
