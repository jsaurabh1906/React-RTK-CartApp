import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../features/cart/cartSlice";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        title: title,
        price: price,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className="p-6 bg-emerald-50 shadow-md rounded-lg border border-yellow-300">
      <header className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-extrabold text-sky-700">{title}</h3>
        <div className="text-xl font-bold text-sky-600">
          ₹{total.toFixed(2)}
          <span className="block text-sm font-normal text-sky-500">
            (₹{price.toFixed(2)}/item)
          </span>
        </div>
      </header>

      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold text-sky-600">
          Qty: <span className="text-sky-600 font-semibold">{quantity}</span>
        </div>

        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={removeItemHandler}
            className="flex items-center justify-center pb-1 w-10 h-10 bg-sky-200 text-sky-700 text-xl font-bold rounded-full transition-all duration-300 hover:bg-sky-300 leading-none"
          >
            -
          </button>
          <button
            onClick={addItemHandler}
            className="flex items-center justify-center pb-1 w-10 h-10 bg-sky-500 text-white text-xl font-bold rounded-full transition-all duration-300 hover:bg-sky-600 leading-none"
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
