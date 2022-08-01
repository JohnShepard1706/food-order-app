import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import classes from "./CartModalElement.module.css";
const CartModalElement = (props) => {
  const ctx = useContext(CartContext);
  const incrementHandler = () => {
    ctx.updateCart(props.name, 1);
  };
  const decrementHandler = () => {
    ctx.updateCart(props.name, -1);
  };
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <span className={classes.price}>${props.price}</span>
      <span className={classes.quantity}>x{props.quantity}</span>
      <div className={classes.incdec}>
        <span onClick={decrementHandler} className={classes.plmn}>
          -
        </span>
        <span onClick={incrementHandler} className={classes.plmn}>
          +
        </span>
      </div>
      <br />
      <hr />
    </React.Fragment>
  );
};
export default CartModalElement;
