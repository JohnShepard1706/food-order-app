import React, { useState } from "react";
import Navbar from "./components/UI/Navbar";
import Header from "./components/UI/Header";
import Menu from "./components/Menu/Menu";
import CartModal from "./components/Cart/CartModal";
import OrderModal from "./components/Order/OrderModal";
import { CartContextProvider } from "./context/cart-context";

function App() {
  const [viewCart, setViewCart] = useState(false);
  const [viewOrder, setViewOrder] = useState(false);
  const openCart = () => {
    setViewCart(true);
  };
  const closeCart = () => {
    setViewCart(false);
  };
  const openOrder = () => {
    setViewCart(false);
    setViewOrder(true);
  };
  const closeOrder = () => {
    setViewOrder(false);
  };
  return (
    <React.Fragment>
      <CartContextProvider>
        <Navbar openCart={openCart}></Navbar>
        <Header></Header>
        <Menu></Menu>
        {viewCart && <CartModal openOrder={openOrder} openCart={openCart} closeCart={closeCart} />}
        {viewOrder && (
          <OrderModal openOrder={openOrder} closeOrder={closeOrder} />
        )}
      </CartContextProvider>
    </React.Fragment>
  );
}

export default App;
