import { createReducer } from '@reduxjs/toolkit';
import { addToCart, removeFromCart, updateCartItemQuantity } from './actions';

const initialState = {
  items: [],
};

const cartReducer = createReducer(initialState, {
  [addToCart]: (state, action) => {
    state.items.push(action.payload);
  },
  [removeFromCart]: (state, action) => {
    state.items = state.items.filter(item => item.id !== action.payload);
  },
  [updateCartItemQuantity]: (state, action) => {
    const { itemId, quantity } = action.payload;
    const item = state.items.find(item => item.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  },
});

export default cartReducer;
