import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import ProductoDetail from "../../components/ProductoDetail/ProductoDetail";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg  max-sm:grid max-sm:grid-cols-[repeat(auto-fill,_140px)] max-sm:justify-center max-sm:mx-2">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductoDetail />
    </Layout>
  );
}

export default Home;
