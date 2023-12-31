import { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import OrdersCard from "../../components/OrdersCard/OrdersCard";
import { ShoppingCartContext } from "../../Context/Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-4">
        <h1 className="font-medium text-xl ">My Orders</h1>
      </div>

      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
          date={order.date}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
