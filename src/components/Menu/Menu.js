import React from "react";
import { useState, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import Card from "../UI/Card";
import Item from "./Item";
import classes from "./Menu.module.css";

// const DISHES = [
//   {
//     name: "Sushi",
//     desc: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     name: "Schnitzel",
//     desc: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     name: "Barbecue Burger",
//     desc: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     name: "Green Bowl",
//     desc: "Healthy...and green...",
//     price: 18.99,
//   },
// ];
const Menu = () => {
  const [dishes, setDishes] = useState([]);
  const { isLoading, sendRequest } = useHttp();
  const action = (data) => {
    const meals = Object.values(data);
    setDishes(meals);
    // console.log(dishes);
  };

  useEffect(() => {
    sendRequest(
      "https://foodshop-f67c4-default-rtdb.firebaseio.com/meals.json",
      action,
      { method: "GET" }
    );
  }, [sendRequest]);

  return (
    <div className={classes.menu}>
      <Card color={"white"} height={"560px"} width={"900px"}>
        {isLoading && (
          <h1 className={classes.loading}>Loading dishes for you...</h1>
        )}
        <div className={classes.items}>
          {dishes.map((dish, num) => (
            <Item
              key={num}
              name={dish.name}
              desc={dish.desc}
              price={dish.price}
            ></Item>
          ))}
        </div>
      </Card>
    </div>
  );
};
export default Menu;
