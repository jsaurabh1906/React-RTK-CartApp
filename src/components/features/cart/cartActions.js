import { uiActions } from "../ui/uiSlice";
import { cartActions } from "./cartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-course-6af42-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("could not fetch cart data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      //replace the cart with the fetched cart data
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "Error!",
          status: "error",
          message: "fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending",
        message: "sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-course-6af42-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          title: "Success!",
          status: "success",
          message: "sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "Error!",
          status: "error",
          message: "sending cart data failed",
        })
      );
    }
  };
};
