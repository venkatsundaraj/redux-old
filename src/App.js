import "./App.css";

import { useState } from "react";

import { Fragment, useEffect } from "react";

import Cart from "./components/Cart/Cart";

import Layout from "./components/Layout/Layout";

import Products from "./components/Shop/Products";

import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "./store/cart";

import Notification from "./components/UI/Notification";

import { sendCartData, fetchCartData } from "./store/cart-actions";

// let isInitial = true;

function App() {
  const [initialState, setInitialState] = useState(true);

  const cart = useSelector((state) => state.cartItem);
  const notification = useSelector((state) => state.cart.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    /*const getData = async function () {
      try {
        dispatch(
          cartActions.showNotification({
            title: "Loading",
            message: "Your Content has been Loading",
            status: "Pending",
          })
        );

        const res = await fetch(
          "https://food-6f8aa-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        console.log(res);

        if (!res.ok) {
          // throw new Error("Something went wrong");
          dispatch(
            cartActions.showNotification({
              title: "error",
              message: "Your request has failed to fetch",
              Status: "Error occured",
            })
          );
        }

        dispatch(
          cartActions.showNotification({
            title: "success",
            message: "Your request Successfully Uploaded",
            status: "Successed",
          })
        );
      } catch (error) {
        dispatch(
          cartActions.showNotification({
            title: "error",
            message: "Your request has failed to fetch",
            Status: "Error occured",
          })
        );
      }
    };

    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }

    if (initialState) {
      setInitialState(false);
      return;
    }

    getData();*/

    //ANOTHER METHOD TO IMPLEMENT ASYNC//
    /*getData().catch((error) => {
      dispatch(
        cartActions.showNotification({
          title: "error",
          message: "Your request has failed to fetch",
          Status: "Error occured",
        })
      );
    });*/

    if (initialState) {
      setInitialState(false);
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
