import React from "react";
import classes from "./Navbar.module.css";
import CartButton from "../Cart/CartButton";
const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav className={classes.mynav}>
        <span className={classes.heading}>ReactMeals</span>
        <CartButton openCart={props.openCart}></CartButton>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
