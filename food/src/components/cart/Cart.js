import CartHead from "./CartHead";
import CartItems from "./CartItems";
import CartFoot from "./CartFoot";
import { selectCartQuantity } from "../../redux-store/selectors/selectCartQuantity";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

const Cart = () => {
    const count = useSelector(selectCartQuantity);

    if (count >= 1) {
        return (
            <div className="container mx-auto my-10 text-primary-content">
                <CartHead />
                <CartItems />
                <CartFoot />
            </div>
        );
    } else {
        return <EmptyCart />;
    }
};

export default Cart;
