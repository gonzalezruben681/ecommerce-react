import PropTypes from 'prop-types'
import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = ({ id, title, imageUrl, price, quantity, handleDelete}) => {
    
    OrderCard.propTypes = {
        id: PropTypes.node.isRequired,
        title: PropTypes.node.isRequired,
        imageUrl: PropTypes.node.isRequired,
        price: PropTypes.node.isRequired,
        quantity: PropTypes.node.isRequired,
        handleDelete: PropTypes.node.isRequired,
    }

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
            <span className='text-sm w-4'>{quantity}</span>
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${price * quantity}</p>
                <XMarkIcon
                className="h-6 w-6 text-black cursor-pointer" onClick={() => handleDelete(id)}></XMarkIcon>
            </div>
        </div>
    )
}

export default OrderCard;
