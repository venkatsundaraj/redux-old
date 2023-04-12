import React from "react";

import classes from "./Notification.module.css";

const Notification = function (props) {
  let specialClasses = "";
  if (props.title === "error") {
    specialClasses = classes.error;
  }

  if (props.title === "success") {
    specialClasses = classes.success;
  }
  return (
    <section className={`${classes.section} ${specialClasses}`}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
