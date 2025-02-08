import React from "react";
import CartButton from "../Cart/CartButton";

const MainHeader = () => {
  return (
    <header className="w-full h-10 px-1 flex justify-between items-center bg-sky-700">
      <h1 className="text-white font-bold text-xl ml-1 md:ml-4">
        React RTK Cart
      </h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
