import { ChevronRightIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
const OrdersCard = ({ totalPrice, totalProducts, date }) => {
  OrdersCard.propTypes = {
    totalPrice: PropTypes.node.isRequired,
    totalProducts: PropTypes.node.isRequired,
    date: PropTypes.node.isRequired,
  };

  return (
    <div className="flex justify-between items-center  border border-black rounded-lg p-4 w-80 mb-4">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light text-lg">{date}</span>
          <span className="font-light text-lg">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
            <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
