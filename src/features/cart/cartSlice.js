import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  cart: [],

  /*   cart: [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 6,
      name: 'Vegetale',
      quantity: 1,
      unitPrice: 13,
      totalPrice: 13,
    },
    {
      pizzaId: 11,
      name: 'Spinach and Mushroom',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ], */
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQUantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item.quantity === 1) cartSlice.caseReducers.deleteItem(state, action)

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQUantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

// export const getTotalQuantity = (state) =>
//   state.cart.cart.reduce((sum, { quantity }) => sum + quantity, 0);

// export const getTotalPrice = (state) =>
//   state.cart.cart.reduce((sum, { totalPrice }) => sum + totalPrice, 0);

// export const getCurrentQuantityById = (id) => (state) =>
//   state.cart.cart.find((cart) => cart.pizzaId === id)?.quantity ?? 0;

// liblary untuk mempercepat performa getTotalquntity dan price reselect-redux
export const getCart = (state) => state.cart.cart;

export const getTotalQuantity = createSelector(getCart, (cart) =>
  cart.reduce((sum, { quantity }) => sum + quantity, 0),
);

export const getTotalPrice = createSelector(getCart, (cart) =>
  cart.reduce((sum, { totalPrice }) => sum + totalPrice, 0),
);

export function getCurrentQuantityById(id) {
  const result = createSelector(
    getCart,
    (cart) => cart.find((item) => item.pizzaId === id)?.quantity ?? 0,
  );

  return result
}
