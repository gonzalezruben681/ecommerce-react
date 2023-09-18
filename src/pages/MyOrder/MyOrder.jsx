import { useContext } from "react";
import Layout from "../../components/Layout/Layout"
import OrderCard from "../../components/OrderCard/OrderCard";
import { ShoppingCartContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1
  
  return (
    <Layout>
      <div className="flex items-center justify-center w-80 mb-6 relative">
        <Link to="/my-orders" className="absolute left-0 ">
          <ChevronLeftIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </Link>
        <h1>My Order</h1>
      </div>

      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              quantity={product.quantity}
            />
          );
        })}
      </div>
    </Layout>
  )
}

export default MyOrder