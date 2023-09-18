import { useContext } from "react";
import Layout from "../../components/Layout/Layout"
import OrderCard from "../../components/OrderCard/OrderCard";
import { ShoppingCartContext } from "../../Context/Context";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      MyOrder
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => {
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