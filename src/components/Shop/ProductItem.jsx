import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import { cartActions } from "../features/cart/cartSlice";

const ProductItem = ({ id, title, price, description }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        title,
        price,
      })
    );
  };

  return (
    <li className="bg-white  shadow-md rounded-2xl py-2 w-full max-w-sm border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <Card>
        <div className="-mx-5">
          <header className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-sky-700">{title}</h3>
            <div className="text-sky-500 rounded-full px-4 py-1 text-sm md:text-md font-semibold shadow-md">
              ₹{price.toFixed(2)}
            </div>
          </header>
          <p className="text-sky-600 text-sm leading-normal mb-5">
            {description}
          </p>
          <div className="flex justify-end">
            <button
              onClick={addToCartHandler}
              className="bg-sky-500 mb-1 text-white px-5 py-2 rounded-lg font-semibold hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
