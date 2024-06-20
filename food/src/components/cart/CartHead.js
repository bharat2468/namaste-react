// src/components/CartHead.js
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux-store/slices/cartSlice";
import { selectCartQuantity } from "../../redux-store/selectors/selectCartQuantity";

const CartHead = () => {
    const dispatch = useDispatch();
    const itemCount = useSelector(selectCartQuantity);

    return (
        <>
            <div className="flex justify-between items-center p-4 text-primary-content">
                <div></div>
                <h1 className="text-2xl">Cart - {itemCount} items</h1>
                <button
                    className="btn btn-error"
                    onClick={() => dispatch(clearCart())}
                >
                    Clear Cart
                </button>
            </div>
            <div className="bg-primary h-[0.05rem] w-full"></div>
        </>
    );
};

export default CartHead;
