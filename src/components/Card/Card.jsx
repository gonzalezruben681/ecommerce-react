import { useContext} from "react";
// import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/Context";
import { IconProductCheck } from "./Icon";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };


  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    const productExists = context.cartProducts.some(
      (el) => el.id === productData.id
    ); // dará true si el producto ya se encuentra en el carrito
    
    if (productExists) {
      // valida la existencia
      const productCart = context.cartProducts.find(
        (el) => el.id === productData.id
        ); // busca el producto
        productData.quantity = context.count; 
      context.setCount(productCart.quantity += 1);  // aumenta la cantidad en 1
    } else {
      productData.quantity = 1; // si el producto no está, le agrega la propiedad quantity con valor uno, y luego setea el carrito agregando ese producto
      context.setCount(productData.quantity);
      context.setCartProducts([...context.cartProducts, productData]);
    }
    context.openCheckoutSideMenu();
    
  };

  // const renderIcon = (id) => {
  //   let isInCart = context.cartProducts.filter(product => product.id === id).length > 0

  //   if (isInCart) {
  //     setTimeout(() => {
  //       return (
  //         <div
  //             className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
  //           >
  //             <CheckIcon className="h-6 w-6 text-white"></CheckIcon>
  //           </div>
  //       )

  //     }, 100);
  //   } else {
  //     return (
  //       <div
  //           className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
  //           onClick={(event) => addProductsToCart(event, data.data)}
  //         >
  //           <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
  //         </div>
  //     )
  //   }
  // }

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 max-sm:w-32"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        <IconProductCheck type="plus-icon" color='white'  onClick={(event) => {
          addProductsToCart(event, data.data)
          }} />
        {/* <IconProductCheck type="check-icon" color="black"  onClick={null} /> */}
      </figure>
      <p className="flex justify-between ">
        <span className="text-sm font-light max-sm:text-xs">
          {data.data.title}
        </span>
        <span className="text-lg font-medium  max-sm:text-sm">
          ${data.data.price}
        </span>
      </p>
    </div>
  );
};

export default Card;
