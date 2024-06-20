import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CDN_LINK } from "../../utils/constants";
import {
    addItem,
    increaseQuantity,
    decreaseQuantity
} from "../../redux-store/slices/cartSlice";
import { selectCartItems } from "../../redux-store/selectors/selectCartItems";
import { selectCartQuantity } from '../../redux-store/selectors/selectCartQuantity';

// Component to display a single dish
const DishCard = ({ dish }) => {
    const dispatch = useDispatch();
    const items = useSelector(selectCartItems);
    const { id, name, description, imageId, defaultPrice, price } = dish.card.info;
    const finalPrice = price || defaultPrice;

    // Find the item in the cart
    const cartItem = items.find(item => item.info.card.info.id === id);

    return (
        <div
            key={id}
            className="my-10 mx-4 md:mx-24 h-fit card card-side bg-base-100 shadow-xl flex flex-col items-center md:flex-row"
        >
            {imageId && (
                <DishImage imageId={imageId} name={name} />
            )}
            <div className="card-body flex-grow">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <h2 className="card-title">
                    Rs. {finalPrice / 100}
                </h2>
                <div className="card-actions justify-end">
                    {cartItem ? (
                        <QuantityControl
                            cartItem={cartItem}
                            onDecrease={() => dispatch(decreaseQuantity(cartItem))}
                            onIncrease={() => dispatch(increaseQuantity(cartItem))}
                        />
                    ) : (
                        <AddToCartButton onAdd={() => dispatch(addItem({ info: dish, quantity: 1 }))} />
                    )}
                </div>
            </div>
        </div>
    );
};

// Component for the dish image
const DishImage = ({ imageId, name }) => (
    <figure className="flex-shrink-0 w-[90%] md:w-[300px] m-4 md:m-10">
        <img
            src={`${CDN_LINK}${imageId}`}
            alt={`${name} Image`}
            className="object-cover h-full w-full rounded-2xl"
        />
    </figure>
);

// Component for the add to cart button
const AddToCartButton = ({ onAdd }) => (
    <button className="btn btn-secondary text-secondary-content" onClick={onAdd}>
        Add To Cart
    </button>
);

// Component for the quantity control buttons
const QuantityControl = ({ cartItem, onDecrease, onIncrease }) => (
    <div className="flex items-center space-x-4">
        <button
            className="btn btn-secondary"
            onClick={onDecrease}
        >
            -
        </button>
        <span>{cartItem.quantity}</span>
        <button
            className="btn btn-secondary"
            onClick={onIncrease}
        >
            +
        </button>
    </div>
);

export default DishCard;
