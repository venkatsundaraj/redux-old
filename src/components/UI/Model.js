import React from "react";

import ReactDOM from "react-dom";

import classes from "./Model.module.css";

import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart";
const Model = function (props) {
  const dispatch = useDispatch();
  const cartShownHandler = function () {
    dispatch(cartActions.logOut());
    // console.log("good");
  };

  const OverLay = function (props) {
    return <div className={classes.overlay}>{props.children}</div>;
  };

  const BackDrop = function () {
    return <div className={classes.backdrop} onClick={cartShownHandler}></div>;
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <OverLay>{props.children}</OverLay>,    
        document.getElementById("model")
      )}
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("model"))}
    </React.Fragment>
  );
};

export default Model;
