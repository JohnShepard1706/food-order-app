import React from "react";
import Card from "./Card";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <Card color={"#313131"} height={"230px"} width={"730px"}>
        <div className={classes.center}>
          <h1>Delicious Food, Delivered To You</h1>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      </Card>
    </div>
  );
};
export default Header;
