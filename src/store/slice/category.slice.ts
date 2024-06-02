import { emptyCategory, ICategory } from "@model/category.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  category: ICategory;
  categories: ICategory[];
}

const initialState: CategoryState = {
  category: emptyCategory,
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<ICategory>) {
      state.category = action.payload;
    },
    clearCategory(state) {
      state.category = emptyCategory;
    },
  },
});

export const { setCategory, clearCategory } = categorySlice.actions;

const reducer = categorySlice.reducer;
export { reducer as categoryReducer };
