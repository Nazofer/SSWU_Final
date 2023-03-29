import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCartState = {products: [], cartCounter: 0};

// const cartCounterSlice = createSlice({
//   name: 'cartCounter',
//   initialState: initialCartCounterValue,
//   reducers: {
//     increaseCartCounter(state, action) {
//       state.value += action.payload;
//     },
//     decreaseCartCounter(state, action) {
//       state.value -= action.payload;
//     },
//     clearCartCounter(state) {
//       state.value = 0;
//     },
//   },
// });

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartCounter += action.payload.quantity;
      // console.log(itemIndex);
      // console.log(!-1);
      if (itemIndex === -1) {
        state.products.push(action.payload);
      } else {
        state.products[itemIndex].quantity += action.payload.quantity;
      }
    },
    removeItemFromCart(state, action) {
      state.products = state.products.filter((item) => item.id !== action.payload.id);
      state.cartCounter -= action.payload.quantity;
    },
    setCartItemQuantity(state, action) {
      const itemIndex = state.products.findIndex((item) => item.id === action.payload.id);
      // console.log("action.payload.quantity", action.payload.quantity);
      // console.log('state.products[itemIndex]', state.products[itemIndex]);
      state.products[itemIndex].quantity = action.payload.quantity;
      state.cartCounter = state.products.reduce(
        (acc, cur) => (acc += cur.quantity),
        0
      );
    },
    clearCart(state, action) {
      state.products = [];
      state.cartCounter = 0;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  setCartItemQuantity,
  clearCart,
} = cartSlice.actions;

export default store;
