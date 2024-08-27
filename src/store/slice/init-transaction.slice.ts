import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const initialState: any = {
  errors: "",
  isLoading: false,
  initialFetch: true,
  initialTransactions: {}
};

export const initTransactionSlice = createSlice({
  name: "initTransaction",
  initialState,
  reducers: {
    setActiveInitTransaction: (
      state,
      action: PayloadAction<any>
    ) => {
      state.initTransaction = action.payload;
    },
    setInitPayment: (state, action: PayloadAction<any>) => {
      state.initPayment = action.payload
    }
  },
});

export const { setActiveInitTransaction, setInitPayment } = initTransactionSlice.actions;

const reducer = initTransactionSlice.reducer;

export { reducer as initTransactionReducer };
