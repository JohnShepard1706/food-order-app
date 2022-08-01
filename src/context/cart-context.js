import React, { useState } from "react";
const CART_LIST = [
  { name: "Sushi", price: 22.99, quantity: 0 },
  { name: "Schnitzel", price: 16.5, quantity: 0 },
  { name: "Barbecue Burger", price: 12.99, quantity: 0 },
  { name: "Green Bowl", price: 18.99, quantity: 0 },
];
const CartContext = React.createContext({
  CART_LIST: [],
  totalAmount: 0,
  totalPrice: 0,
  updateCart: () => {},
});
export const CartContextProvider = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const TotalCalculator = () => {
    var total = 0;
    var price = 0;
    CART_LIST.forEach((cart) => {
      total += cart.quantity;
      price += cart.price * cart.quantity;
    });
    setTotalAmount(total);
    setTotalPrice(price.toFixed(2));
  };

  const updateCart = (name, quantity) => {
    const found = CART_LIST.findIndex((element) => element.name === name);
    CART_LIST[found].quantity += Number(quantity);
    TotalCalculator();
    // console.log("total: ", totalAmount);
    // console.log(CART_LIST);
  };
  return (
    <CartContext.Provider
      value={{
        CART_LIST: CART_LIST,
        totalAmount: totalAmount,
        totalPrice: totalPrice,
        updateCart: updateCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
