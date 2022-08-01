import React from "react";
import classes from "./Item.module.css";
import AddCart from "../Cart/AddCart";
const Item = (props) => {
  return (
    <React.Fragment>
      <table className={classes.paddingBetweenCols}>
        <tbody>
          <tr>
            <td className={classes.firstcol}>
              <h3 className={classes.name}>{props.name}</h3>
              <p className={classes.desc}>{props.desc}</p>
              <h3 className={classes.price}>${props.price}</h3>
            </td>
            <td className={classes.cartcol}>
              <AddCart name={props.name}></AddCart>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
    </React.Fragment>
  );
};
export default Item;
