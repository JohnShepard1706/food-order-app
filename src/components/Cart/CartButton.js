// Manage cart with context so that the modal can use the value and AddCart can update the amount
import React, { useContext } from "react";
import classes from "./CartButton.module.css";
import { CartFill } from "react-bootstrap-icons";
import CartContext from "../../context/cart-context";
const CartButton = (props) => {
  const ctx = useContext(CartContext);
  // console.log(ctx.totalAmount);
  return (
    <div onClick={props.openCart} className={classes.cart}>
      <CartFill />
      <span className={classes.text}>Your Cart</span>
      <span className={classes.zero}>{ctx.totalAmount}</span>
    </div>
  );
};
export default CartButton;
