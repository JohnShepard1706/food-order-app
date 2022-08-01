import React from "react";
import ReactDom from "react-dom";
import classes from "./OrderModal.module.css";
import Card from "../UI/Card";
import useInput from "../../hooks/use-input";
import useHttp from "../../hooks/use-http";
import { useContext } from "react";
import CartContext from "../../context/cart-context";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeOrder} />;
};
const ModalOverlay = (props) => {
  const ctx = useContext(CartContext);
  const { error, isLoading, sendRequest } = useHttp();
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    setValueHandler: setName,
    setIsBlur: nameBlur,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    setValueHandler: setEmail,
    setIsBlur: emailBlur,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));
  const {
    value: number,
    isValid: numberIsValid,
    hasError: numberHasError,
    setValueHandler: setNumber,
    setIsBlur: numberBlur,
    reset: numberReset,
  } = useInput((value) => value.trim().length === 12);
  const {
    value: address,
    isValid: addressIsValid,
    hasError: addressHasError,
    setValueHandler: setAddress,
    setIsBlur: addressBlur,
    reset: addressReset,
  } = useInput((value) => value.trim() !== "");
  const nameInputClasses = nameHasError ? "invalid" : "";
  const emailInputClasses = emailHasError ? "invalid" : "";
  const numberInputClasses = numberHasError ? "invalid" : "";
  const addressInputClasses = addressHasError ? "invalid" : "";

  const applyData = (data) => {
    console.log(data);
  };
  const enterTaskHandler = async () => {
    await sendRequest(
      "https://foodshop-f67c4-default-rtdb.firebaseio.com/orders.json",
      applyData.bind(null, ctx.CART_LIST),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ctx.CART_LIST),
      }
    );
    props.closeOrder();
  };

  const submissionHandler = (event) => {
    event.preventDefault();
    nameReset();
    emailReset();
    numberReset();
    addressReset();
  };
  const formIsValid =
    nameIsValid && emailIsValid && numberIsValid && addressIsValid;
  return (
    <Card margin={"-70px"} color={"white"} className={classes.modal}>
      {isLoading && (
        <h1 className={classes.loading}>Confirming your order...</h1>
      )}
      {!isLoading && (
        <div className={classes.content}>
          <form onSubmit={submissionHandler}>
            <div
              className={` ${classes["form-control"]} ${classes[nameInputClasses]} `}
            >
              <label htmlFor="name">Your Name</label>
              <input
                onChange={setName}
                onBlur={nameBlur}
                value={name}
                type="text"
                id="name"
              />
              {nameHasError && (
                <p className={classes["error-text"]}>Please enter your name.</p>
              )}
            </div>
            <div
              className={` ${classes["form-control"]} ${classes[emailInputClasses]} `}
            >
              <label htmlFor="name">Email</label>
              <input
                onChange={setEmail}
                onBlur={emailBlur}
                value={email}
                type="text"
                id="name"
              />
              {emailHasError && (
                <p className={classes["error-text"]}>
                  Please enter a valid email.
                </p>
              )}
            </div>
            <div
              className={` ${classes["form-control"]} ${classes[numberInputClasses]} `}
            >
              <label htmlFor="name">Phone No.</label>
              <input
                onChange={setNumber}
                onBlur={numberBlur}
                value={number}
                type="text"
                id="name"
              />
              {numberHasError && (
                <p className={classes["error-text"]}>
                  Please enter a valid number. Format: 03xx-xxxxxxx
                </p>
              )}
            </div>
            <div
              className={` ${classes["form-control"]} ${classes[addressInputClasses]} `}
            >
              <label htmlFor="name">Address</label>
              <input
                onChange={setAddress}
                onBlur={addressBlur}
                value={address}
                type="text"
                id="name"
              />
              {addressHasError && (
                <p className={classes["error-text"]}>
                  Please enter an address.
                </p>
              )}
            </div>
            <div className={classes["form-actions"]}>
              <button
                disabled={!formIsValid}
                onClick={enterTaskHandler}
                className={classes.submitbtn}
              >
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      )}
    </Card>
  );
};
const OrderModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop closeOrder={props.closeOrder} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay closeOrder={props.closeOrder} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default OrderModal;
