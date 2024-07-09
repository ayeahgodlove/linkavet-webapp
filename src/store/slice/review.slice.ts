import { emptyReview, IReview, IReviewResponses, IReviewState } from "@model/review.model";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReviewService } from "@services/review.service";

interface ReviewState {
  review: IReview;
  categories: IReview[];
}

export const initialState: IReviewState = {
  reviews: [],
  errors: "",
  review: emptyReview,
  isLoading: false,
  initialFetch: true,
};

export const fetchReviewsAsync = createAsyncThunk<IReviewResponses, void>(
  "review/fetchReviewsAsync",
  async (_, thunkApi) => {
    try {
      return await ReviewService.list();
    } catch (error: any) {
      return thunkApi.rejectWithValue({ error: error.data });
    }
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    fetchReviewRequest: (state) => {
      state.isLoading = true;
    },
    fetchReviewSuccess: (state, action: PayloadAction<IReview[]>) => {
      state.isLoading = false;
      state.initialFetch = false;
      state.reviews = action.payload;
    },
    fetchReviewError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    editReviewSuccess: (state, action: PayloadAction<IReview>) => {
      state.reviews = state.reviews.map((review) => {
        return review.id === action.payload.id ? action.payload : review;
      });
    },
    addReviewSuccess: (state, action: PayloadAction<IReview>) => {
      state.reviews = [...state.reviews, action.payload];
    },
    setReview(state, action: PayloadAction<IReview>) {
      state.review = action.payload;
    },
    clearReview(state) {
      state.review = emptyReview;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReviewsAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchReviewsAsync.fulfilled, (state, action: PayloadAction<IReviewResponses>) => {
      state.isLoading = false;
      state.initialFetch = false;
      state.reviews = action.payload.data;
    });
    builder.addCase(fetchReviewsAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const {
  fetchReviewRequest,
  fetchReviewSuccess,
  fetchReviewError,
  editReviewSuccess,
  addReviewSuccess,
  setReview,
  clearReview
} = reviewSlice.actions;

const reducer = reviewSlice.reducer;

export { reducer as reviewReducer };