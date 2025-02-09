import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../../utils/slice.ts";

const Cart = () => {
  const itemData = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearItem());
  };
  return (
    <div className="cart-main-container">
      <h1>CART</h1>
      <button onClick={handleClear}>Clear Cart</button>
      {itemData?.length === 0 && <h1>Looks like your cart is Empty.</h1>}
      {itemData?.map((eachItem: any) => (
        <div className="cart-container">
          <span>{eachItem?.card?.info?.name}</span>
          <span>₹{eachItem?.card?.info?.price / 100}</span>
        </div>
      ))}
    </div>
  );
};

export default Cart;
