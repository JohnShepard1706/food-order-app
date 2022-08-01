import React, { useContext, useState } from "react";
import CartContext from "../../context/cart-context";
import classes from "./AddCart.module.css";

const AddCart = (props) => {
  const ctx = useContext(CartContext);
  const [amount, setAmount] = useState(0);
  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const handleClick = () => {
    ctx.updateCart(props.name, amount);
  };
  return (
    <React.Fragment>
      <label className={classes.amount} htmlFor="amount">
        Amount:
      </label>
      <input
        type="number"
        id={classes.amount}
        min={1}
        max={10}
        defaultValue={0}
        onBlur={changeAmountHandler}
      />
      <br />
      <button onClick={handleClick} className={classes.add}>
        + Add
      </button>
    </React.Fragment>
  );
};
export default AddCart;
