import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux-store/selectors/selectCartItems";
import {
    removeItem,
    increaseQuantity,
    decreaseQuantity,
} from "../../redux-store/slices/cartSlice";
import { CDN_LINK } from "../../utils/constants";

const CartItems = () => {
    const items = useSelector(selectCartItems);

    return (
        <div className="p-4 md:p-6 lg:p-8">
            {items.map((dish) => (
                <CartItem key={dish.info.card.info.id} dish={dish} />
            ))}
        </div>
    );
};

const CartItem = ({ dish }) => {
    const dispatch = useDispatch();
    const { id, name, imageId, defaultPrice, price } = dish.info.card.info;
    const finalPrice = price || defaultPrice;

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity(dish));
    };

    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity(dish));
    };

    const handleRemoveItem = () => {
        dispatch(removeItem(dish));
    };

    return (
        <div key={id} className="card card-side bg-base-100 shadow-xl my-4 flex flex-col md:flex-row">
            {imageId && (
                <figure className="flex-shrink-0 w-full md:w-1/3 p-4 md:p-6 max-h-[300px]">
                    <img
                        src={`${CDN_LINK}${imageId}`}
                        alt={`${name} Image`}
                        className="object-cover h-full w-full rounded-3xl"
                    />
                </figure>
            )}
            <div className="card-body p-4 md:p-6">
                <h2 className="card-title text-lg md:text-xl lg:text-2xl">{name}</h2>
                <p className="text-md md:text-lg lg:text-xl">Price: Rs. {finalPrice / 100}</p>
                <div className="flex items-center space-x-2 md:space-x-4 mt-2 md:mt-4">
                    <button className="btn btn-secondary text-lg md:text-xl" onClick={handleDecreaseQuantity}>-</button>
                    <span className="text-lg md:text-xl">{dish.quantity}</span>
                    <button className="btn btn-secondary text-lg md:text-xl" onClick={handleIncreaseQuantity}>+</button>
                    <button className="btn btn-error text-sm md:text-base lg:text-lg" onClick={handleRemoveItem}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
