import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

import Model from "../UI/Model";
import { Fragment } from "react";

const Cart = (props) => {
  const isLoggedIn = useSelector((state) => state.cart.isLoggedIn);
  const items = useSelector((state) => state.cartItem.items);
  // console.log(items);
  const cartItems = (
    <Model>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {items.map((item) => (
            <CartItem
              item={{
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
                key: item.itemId,
                id: item.itemId,
              }}
              key={item.itemId}
            />
          ))}
        </ul>
      </Card>
    </Model>
  );
  return <Fragment>{isLoggedIn && cartItems}</Fragment>;
};

export default Cart;
