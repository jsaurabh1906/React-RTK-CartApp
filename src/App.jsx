import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { uiActions } from "./components/features/ui/uiSlice";
import Notification from "./components/UI/Notification";
import {
  fetchCartData,
  sendCartData,
} from "./components/features/cart/cartActions";

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notificationStatus = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    // to avoid sending cart data on initial render
    if (isInitial) {
      isInitial = false;
      return; //
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notificationStatus && (
        <Notification
          status={notificationStatus.status}
          title={notificationStatus.title}
          message={notificationStatus.message}
        />
      )}
      <Layout>
        <main className="bg-gradient-to-b from-indigo-100 from-0% via-cyan-100 via-50% to-sky-100 to-100%">
          {showCart && <Cart />}
          <Products />
        </main>
      </Layout>
    </>
  );
}

export default App;

// Another way to send cart data instead of cart actions
// useEffect(() => {
//   const sendCartData = async () => {
//     dispatch(
//       uiActions.showNotification({
//         status: "pending",
//         title: "sending",
//         message: "sending cart data",
//       })
//     );

//     const response = await fetch(
//       "https://react-course-6af42-default-rtdb.firebaseio.com/cart.json",
//       {
//         method: "PUT",
//         body: JSON.stringify(cart),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("sending cart data failed");
//       // dispatch(
//       //   uiActions.showNotification({
//       //     status: "error",
//       //     title: "Error",
//       //     message: "sending cart data failed",
//       //   })
//       // );
//     }

//     const data = await response.json();
//     console.log(data);

//     dispatch(
//       uiActions.showNotification({
//         status: "success",
//         title: "success",
//         message: "sent cart data successfully",
//       })
//     );
//   };
//   // to avoid sending cart data on initial render
//   if (isInitial) {
//     isInitial = false;
//     return; //
//   }
//   sendCartData().catch((error) => {
//     dispatch(
//       uiActions.showNotification({
//         status: "error",
//         title: "Error",
//         message: "sending cart data failed",
//       })
//     );
//   });
// }, [cart, dispatch]);
