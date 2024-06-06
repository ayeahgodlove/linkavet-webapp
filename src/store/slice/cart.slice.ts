import { CartItem, CartState } from "@model/cart-item.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const addedItem = action.payload;
      const tmpCart = [...state.items];
      const isExist = tmpCart.some((_item) => _item.id === addedItem.id);

      if (isExist) {
        state.items = tmpCart.map((_item) =>
          _item.id === addedItem.id
            ? {
                ..._item,
                quantity: _item.quantity + 1,
                total: Number(_item.total) + Number(addedItem.price),
              }
            : _item
        );
      } else {
        state.items.push({
          ...addedItem,
          quantity: 1,
          total: addedItem.price,
          discountedPrice: Number(
            parseFloat(
              (
                (addedItem.price * (100 - addedItem.discountPercentage)) /
                100
              ).toFixed(0)
            )
          ),
        });
      }
      localStorage.setItem("order", JSON.stringify(state.items));
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      // Update localStorage if needed
      localStorage.setItem("order", JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

const reducer = cartSlice.reducer;
export { reducer as cartReducer };
