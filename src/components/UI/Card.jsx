import React from "react";

const Card = ({ children }) => {
  return (
    <section className="mx-auto rounded-xl  p-4 w-[90%] md:w-[80%] ">
      {children}
    </section>
  );
};

export default Card;
