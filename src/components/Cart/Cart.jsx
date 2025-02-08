import React from "react";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card>
      <section className="mt-4 p-4 rounded-2xl bg-gradient-to-b from-sky-500 from-0% via-cyan-400 via-50% to-indigo-300 to-100% shadow-2xl">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Shopping Cart <span className="bg-white rounded-md">🛒</span>
        </h2>
        {cartItems && cartItems?.length === 0 && (
          <p className="text-white text-center font-semibold">
            Your Cart is Empty!
          </p>
        )}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
      </section>
    </Card>
  );
};

export default Cart;
