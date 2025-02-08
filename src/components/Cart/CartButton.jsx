import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../features/ui/uiSlice";

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button
      onClick={toggleCartHandler}
      className="mr-4 bg-transparent border border-green-300 rounded-md  hover:bg-sky-600 transition-all duration-300"
    >
      <span className="py-2 px-2 text-md text-green-200 font-semibold">
        My Cart
      </span>
      <span className="rounded-full text-white font-bold bg-green-400  px-2 m-1">
        {cartQuantity}
      </span>
    </button>
  );
};

export default CartButton;
