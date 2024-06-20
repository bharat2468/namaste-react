// src/redux-store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import { loadState, saveState } from './localStorage';

const preloadedState = loadState();

export const Store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState,
});

Store.subscribe(() => {
    saveState({
        cart: Store.getState().cart,
    });
});

