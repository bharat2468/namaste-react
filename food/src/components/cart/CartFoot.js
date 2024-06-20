import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux-store/selectors/selectCartItems";

const CartFoot = () => {
    const items = useSelector(selectCartItems);
    const [coupon, setCoupon] = useState("");
    const [isCouponDialogOpen, setIsCouponDialogOpen] = useState(false);
    const [couponError, setCouponError] = useState("");
    const [discount, setDiscount] = useState(0);

    const validCoupons = {
        SAVE10: 10,
        SAVE20: 20,
        SAVE30: 30,
    };

    const subtotal =
        items.reduce(
            (total, item) =>
                total +
                (item.info.card.info.price ||
                    item.info.card.info.defaultPrice) *
                    item.quantity,
            0
        ) / 100;

    const tax = subtotal * 0.1; // Assuming 10% tax
    const discountAmount = (subtotal * discount) / 100;
    const total = subtotal + tax - discountAmount;

    const handleApplyCoupon = () => {
        if (validCoupons[coupon]) {
            setDiscount(validCoupons[coupon]);
            setCouponError("");
            setIsCouponDialogOpen(false);
        } else {
            setCouponError("Invalid coupon code");
        }
    };

    return (
        <div className="flex w-full justify-end p-4">
            <div className="bg-base-200 w-full md:w-2/3 lg:w-1/2 rounded-md p-4">
                <div className="flex justify-between text-sm md:text-base lg:text-lg">
                    <span>Subtotal:</span>
                    <span>Rs. {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm md:text-base lg:text-lg">
                    <span>Sales Tax:</span>
                    <span>Rs. {tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm md:text-base lg:text-lg">
                    <span>Discount:</span>
                    <span>- Rs. {discountAmount.toFixed(2)}</span>
                </div>
                <hr className="border-t-2 border-primary my-2" />
                <div className="flex justify-between text-sm md:text-base lg:text-lg">
                    <span>Total:</span>
                    <span>Rs. {total.toFixed(2)}</span>
                </div>
                <button
                    className="btn btn-secondary text-secondary-content mt-4 w-full md:w-auto"
                    onClick={() => setIsCouponDialogOpen(true)}
                >
                    Apply Coupon
                </button>
                {isCouponDialogOpen && (
                    <CouponDialog
                        coupon={coupon}
                        setCoupon={setCoupon}
                        handleApplyCoupon={handleApplyCoupon}
                        closeDialog={() => setIsCouponDialogOpen(false)}
                        couponError={couponError}
                    />
                )}
                <button className="btn btn-success mt-4 w-full md:w-auto md:ml-3">
                    Checkout
                </button>
            </div>
        </div>
    );
};

const CouponDialog = ({
    coupon,
    setCoupon,
    handleApplyCoupon,
    closeDialog,
    couponError,
}) => (
    <div className="modal modal-open">
        <div className="modal-box p-4">
            <h3 className="font-bold text-lg">Enter Coupon Code</h3>
            <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="input input-bordered w-full mt-4"
            />
            {couponError && (
                <div role="alert" className="my-4 alert alert-error">
                    <span>{couponError}</span>
                </div>
            )}
            <div className="modal-action flex justify-between">
                <button
                    className="btn btn-secondary text-secondary-content"
                    onClick={handleApplyCoupon}
                >
                    Apply
                </button>
                <button className="btn" onClick={closeDialog}>
                    Close
                </button>
            </div>
        </div>
    </div>
);

export default CartFoot;
