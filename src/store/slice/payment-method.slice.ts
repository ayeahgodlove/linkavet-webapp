import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: any = {
  method: "COD",
};

export const paymentMethodSlice = createSlice({
  name: "paymentMethod",
  initialState,
  reducers: {
    setActivePaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const { setActivePaymentMethod } = paymentMethodSlice.actions;

const reducer = paymentMethodSlice.reducer;

export { reducer as paymentMethodReducer };
