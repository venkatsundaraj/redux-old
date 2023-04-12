import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

import { useDispatch, useSelector } from "react-redux";

import { CartItemActions } from "../../store/cart-items";

const ProductItem = (props) => {
  const { title, price, description, id, quantity } = props;
  const cart = useSelector((state) => state.cartItem);

  // console.log(cart);

  const dispatch = useDispatch();

  const cartDetailsHandler = function () {
    /*const updatedItems = cart.items.slice();

    const newTotalQuantity = cart.totalAmount + 1;

    const existingItem = updatedItems.find((item) => item.id === id);

    if (existingItem) {
      const updatedItem = { ...existingItem };
      updatedItem.quantity++;
      updatedItem.price = updatedItem.price + price;
      const existingFindIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      updatedItems[existingFindIndex] = updatedItem;
    } else {
      updatedItems.push({
        title,
        price,
        description,
        id,
        quantity,
      });
    }

    const newCart = {
      newTotalQuantity: newTotalQuantity,
      items: updatedItems,
    };

     dispatch(CartItemActions.replaceCart(newCart));*/

    dispatch(
      CartItemActions.addItemHandler({
        title,
        price,
        description,
        id,
        quantity,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button className={classes.button} onClick={cartDetailsHandler}>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
