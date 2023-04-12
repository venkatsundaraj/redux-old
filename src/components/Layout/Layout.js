import { Fragment } from "react";
import MainHeader from "./MainHeader";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <MainHeader />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
