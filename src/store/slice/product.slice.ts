import { emptyProduct, IProduct } from "@model/product.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  product: IProduct;
  categories: IProduct[];
}

const initialState: ProductState = {
  product: emptyProduct,
  categories: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<IProduct>) {
      state.product = action.payload;
    },
    clearProduct(state) {
      state.product = emptyProduct;
    },
  },
});

export const { setProduct, clearProduct } = productSlice.actions;

const reducer = productSlice.reducer;
export { reducer as productReducer };
