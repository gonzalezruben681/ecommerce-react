import PropTypes from 'prop-types'
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

const iconTypes = {
    "plus-icon": () => (
        <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
    ),
    "check-icon": () => (
        <CheckIcon className="h-6 w-6 text-green-700"></CheckIcon>
    ),
};

function IconProductCheck({type, color, onClick}) {
    IconProductCheck.propTypes = {
        type: PropTypes.node.isRequired,
        color: PropTypes.node.isRequired,
        onClick: onClick
    }
    return (
        <div
        className={`absolute top-0 right-0 flex justify-center items-center bg-${color} w-6 h-6 rounded-full m-2 p-1`} onClick={onClick}>
            {iconTypes[type]()}
        </div>
    );
}
export { IconProductCheck};