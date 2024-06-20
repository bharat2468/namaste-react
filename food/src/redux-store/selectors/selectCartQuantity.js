export const selectCartQuantity = (state) => {
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};