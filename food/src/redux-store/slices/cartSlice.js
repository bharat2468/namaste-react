import { createSlice } from '@reduxjs/toolkit';

// Helper function to find an item in the cart
const findCartItem = (items, id) => items.find(item => item.info.card.info.id === id);

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const itemId = action.payload.info.card.info.id;
            const existingItem = findCartItem(state.items, itemId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ info: action.payload.info, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload.info.card.info.id;
            state.items = state.items.filter(item => item.info.card.info.id !== itemId);
        },
        clearCart: (state) => {
            state.items = [];
        },
        increaseQuantity: (state, action) => {
            const itemId = action.payload.info.card.info.id;
            const existingItem = findCartItem(state.items, itemId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const itemId = action.payload.info.card.info.id;
            const existingItem = findCartItem(state.items, itemId);
            
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.items = state.items.filter(item => item.info.card.info.id !== itemId);
            }
        }
    },
});

export const { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;

/*

{
    info:{
    "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
        "info": {
            "id": "77102095",
            "name": "Paneer Masala",
            "category": "Paneer Main Course",
            "description": "250 gram | Serves 1 | A flavorful and creamy delight that showcases the melt-in-your-mouth goodness of paneer in a rich and aromatic gravy.",
            "imageId": "ivcopefxyvgosko4dywe",
            "inStock": 1,
            "isVeg": 1,
            "price": 20000,
            "variants": {},
            "variantsV2": {},
            "itemAttribute": {
                "vegClassifier": "VEG",
                "portionSize": "250 gram"
            },
            "ribbon": {},
            "type": "ITEM",
            "itemBadge": {},
            "badgesV2": {},
            "ratings": {
                "aggregatedRating": {
                    "rating": "3.5",
                    "ratingCount": "296 ratings",
                    "ratingCountV2": "296"
                }
            }
        },
        "analytics": {},
        "hideRestaurantDetails": true
    }
}

    quantity:1
}

*/