import React, { useContext } from "react";
import ReactDom from "react-dom";
import classes from "./CartModal.module.css";
import Card from "../UI/Card";
import CartContext from "../../context/cart-context";
import CartModalElement from "./CartModalElement";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeCart} />;
};
const ModalOverlay = (props) => {
  const ctx = useContext(CartContext);
  return (
    <Card margin={"-70px"} color={"white"} className={classes.modal}>
      <div className={classes.content}>
        {ctx.CART_LIST.map((cart) =>
          cart.quantity ? (
            <CartModalElement
              name={cart.name}
              quantity={cart.quantity}
              price={cart.price}
            ></CartModalElement>
          ) : (
            ""
          )
        )}
        <h3 className={classes.total}>Total Amount </h3>
        <span className={classes.amount}>${ctx.totalPrice}</span>
      </div>
      <div className={classes.order}>
        <button onClick={props.closeCart}>Cancel</button>
        {ctx.totalAmount ? (
          <button onClick={props.openOrder}>Order</button>
        ) : (
          ""
        )}
      </div>
    </Card>
  );
};
const CartModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop closeCart={props.closeCart} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          openOrder={props.openOrder}
          closeCart={props.closeCart}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default CartModal;
