import { emptyReview, IReview } from "@model/review.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReviewState {
  review: IReview;
  categories: IReview[];
}

const initialState: ReviewState = {
  review: emptyReview,
  categories: [],
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReview(state, action: PayloadAction<IReview>) {
      state.review = action.payload;
    },
    clearReview(state) {
      state.review = emptyReview;
    },
  },
});

export const { setReview, clearReview } = reviewSlice.actions;

const reducer = reviewSlice.reducer;
export { reducer as reviewReducer };
