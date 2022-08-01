import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div
      className={`${classes.card} ${props.className}`}
      style={{
        backgroundColor: props.color,
        height: props.height,
        width: props.width,
        marginTop: props.margin,
      }}
    >
      {props.children}
    </div>
  );
};
export default Card;
