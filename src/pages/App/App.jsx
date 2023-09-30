import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import MyAccount from "../MyAccount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import MyOrders from "../MyOrders/MyOrders";
import NotFound from "../NotFound/NotFound";
import SignIn from "../SignIn/SignIn";
import Navbar from "../../components/Navbar/Navbar";
import { ShoppingCartContext, ShoppingCartProvider } from "../../Context/Context";
import "./App.css";
import CheckoutSideMenu from "../../components/CheckoutSideMenu/CheckoutSideMenu";
import { useContext } from "react";

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext)
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0: true
  const noAccountInLocalState = Object.keys(context.account).length === 0
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut



  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:category", element: <Home /> },
    { path: "/my-account", element: hasUserAnAccount && !isUserSignOut ? <MyAccount /> : <Navigate to='/sign-in' /> },
    { path: "/my-order/", element: hasUserAnAccount && !isUserSignOut ? <MyOrder /> : <Navigate to='/sign-in' /> },
    { path: "/my-orders", element: hasUserAnAccount && !isUserSignOut ? <MyOrders /> : <Navigate to='/sign-in' /> },
    { path: "/my-orders/last", element: hasUserAnAccount && !isUserSignOut ? <MyOrder /> : <Navigate to='/sign-in' /> },
    { path: "/my-orders/:id", element: hasUserAnAccount && !isUserSignOut ? <MyOrder /> : <Navigate to='/sign-in' /> },
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
