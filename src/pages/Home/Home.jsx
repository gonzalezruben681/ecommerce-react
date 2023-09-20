import { useContext } from "react";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import ProductoDetail from "../../components/ProductoDetail/ProductoDetail";
import { ShoppingCartContext } from "../../Context/Context";

function Home() {
  const context = useContext(ShoppingCartContext)
  
  const renderView = () => {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map((item) => (
            <Card key={item.id} data={item} />
          ))
        )
      }else {
        return (<div>No Results Found :( </div>)
      }
  }

  return (
    <Layout>
        <div className="flex items-center justify-center w-80  relative mb-4">
        <h1 className="font-medium text-xl ">Exclusive Products</h1>
      </div>
      <input className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" onChange={(event) => context.setSearchByTitle(event.target.value)} type="text" placeholder="Search a product" />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg  max-md:grid max-md:grid-cols-[repeat(auto-fill,_140px)] max-md:justify-center max-md:mx-2">
        {renderView()}
      </div>
      <ProductoDetail />
    </Layout>
  );
}

export default Home;
