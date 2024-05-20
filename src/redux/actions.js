import { createAction } from '@reduxjs/toolkit';

// export const addToCart = createAction('ADD_TO_CART');
// export const removeFromCart = createAction('REMOVE_FROM_CART');
// export const updateCartItemQuantity = createAction('UPDATE_CART_ITEM_QUANTITY');

// Пример использования параметров в экшенах с помощью createAction
export const addToCart = createAction('ADD_TO_CART', (game) => ({
  payload: game
}));
export const removeFromCart = createAction('REMOVE_FROM_CART', (gameId) => ({
  payload: gameId
}));
export const updateCartItemQuantity = createAction('UPDATE_CART_ITEM_QUANTITY', (gameId, quantity) => ({
  payload: { gameId, quantity }
}));
