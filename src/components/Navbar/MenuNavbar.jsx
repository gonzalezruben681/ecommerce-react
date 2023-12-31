import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/Context";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const MenuNavbar = () => {
  const context = useContext(ShoppingCartContext);

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem("sign-out",stringifiedSignOut )
    context.setSignOut(true)
  }

    // Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut
    // Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    

  const renderView = () => {
    if (isUserSignOut) {
      return (
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleSignOut()}
          >
            Sign out
          </NavLink>
        </li>
      );
    } else {
      return (
        <>
          <li className="text-black/60">{parsedAccount?.email}</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : `${undefined} hover:bg-gray-100 block p-2`)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : `${undefined} hover:bg-gray-100 block p-2`)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : `${undefined} hover:bg-gray-100 block p-2`)}
            onClick={handleSignOut}
          >
            Sign In
          </NavLink>
        </li>
       
        </>
      );
    }
  };


  const activeStyle = "block w-full p-2 rounded underline underline-offset-4";
  return (
    <div className=" w-[200px] h-[70vh] p-5 border border-black rounded-lg absolute right-0 top-16 flex flex-col items-start gap-6 bg-white lg:hidden">
      <ul className="w-full rounded-lg ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : `${undefined} hover:bg-gray-100 block p-2`)}
            onClick={() => context.setSearchByCategory()}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : `${undefined} hover:bg-gray-100 block p-2` )}
            onClick={() => context.setSearchByCategory("clothes")}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : `${undefined} hover:bg-gray-100 block p-2`)}
            onClick={() => context.setSearchByCategory("electronics")}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) => (isActive ? activeStyle : `${undefined} hover:bg-gray-100 block p-2`)}
            onClick={() => context.setSearchByCategory("furniture")}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : `${undefined} hover:bg-gray-100 block p-2`)}
            onClick={() => context.setSearchByCategory("toys")}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : `${undefined} hover:bg-gray-100 block p-2`)}
            onClick={() => context.setSearchByCategory("others")}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="w-full rounded-lg">
        {renderView()}
        <li className="flex items-center p-2">
        <ShoppingCart />
        </li>
      </ul>
      
    </div>
  );
};

export default MenuNavbar;
