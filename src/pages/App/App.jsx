import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MyAccount from "../MyAccount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import MyOrders from "../MyOrders/MyOrders";
import NotFound from "../NotFound/NotFound";
import SignIn from "../SignIn/SignIn";
import Navbar from "../../components/Navbar/Navbar";
import { ShoppingCartProvider } from "../../Context/Context";
import "./App.css";
import CheckoutSideMenu from "../../components/CheckoutSideMenu/CheckoutSideMenu";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order/", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
