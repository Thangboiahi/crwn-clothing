import {createSelector} from "reselect";

// input selector
const selectCart = state => state.cart;

// memoized selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQuatity, cartItem) => accumulatedQuatity + cartItem.quantity,
    0
  )
)