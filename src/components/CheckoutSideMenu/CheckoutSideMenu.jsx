import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/Context";
import OrderCard from "../OrderCard/OrderCard";
import { totalPrice } from "../../utils/utils";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    // Obtener la fecha actual
    const fecha = new Date();

    // Obtener el día, mes y año
    const dia = fecha.getDate().toString().padStart(2, "0"); // Obtener el día y agregar un cero inicial si es necesario
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Obtener el mes (se suma 1 porque los meses en JavaScript van de 0 a 11) y agregar un cero inicial si es necesario
    const anio = fecha.getFullYear().toString().slice(-2); // Obtener los últimos dos dígitos del año

    // Formatear la fecha en el formato '00/00/00'
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    const orderToAdd = {
      date: fechaFormateada,
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    // context.setSearchByTitle(null)
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } w-[360px] h-[calc(100vh-68px)] top-[68px] flex-col fixed right-0  border border-black rounded-lg bg-white max-sm:w-full`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 scrollable-cards flex-1">
        {context.cartProducts.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              quantity={product.quantity}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
      <div className="px-6 py-5">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light text-lg">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="bg-black py-3 text-white  w-full rounded-lg"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
