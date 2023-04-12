import { cartActions } from "./cart";

import { CartItemActions } from "./cart-items";

export const fetchCartData = function () {
  return async function (dispatch) {
    const fetchData = async function () {
      try {
        const res = await fetch(
          "https://food-6f8aa-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
        );
        const data = await res.json();
        return data;
      } catch (err) {
        dispatch(
          cartActions.showNotification({
            title: "error",
            message: "Your request has failed to fetch",
            Status: "Error occured",
          })
        );
      }
    };

    const data = await fetchData();
    console.log(data);
    dispatch(CartItemActions.replaceCart(data));
  };
};

export const sendCartData = function (cart) {
  return async function (dispatch) {
    dispatch(
      cartActions.showNotification({
        title: "Loading",
        message: "Your Content has been Loading",
        status: "Pending",
      })
    );

    const sendRequest = async function () {
      try {
        const res = await fetch(
          "https://food-6f8aa-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json",
          {
            method: "PUT",
            body: JSON.stringify({
              items: cart.items || [],
              totalAmount: cart.totalAmount,
            }),
          }
        );

        // console.log(await res.json());

        if (!res.ok) {
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

    await sendRequest();
  };
};
