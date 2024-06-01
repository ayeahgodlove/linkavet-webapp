import { configureStore } from "@reduxjs/toolkit";
import { categoryAPI } from "./api/category_api";
import { userAPI } from "./api/user_api";
import { productAPI } from "./api/product_api";
import { orderAPI } from "./api/order_api";
import { paymentAPI } from "./api/payment_api";

export const store = configureStore({
  reducer: {
    [categoryAPI.reducerPath]: categoryAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
    [orderAPI.reducerPath]: orderAPI.reducer,
    [paymentAPI.reducerPath]: paymentAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      categoryAPI.middleware,
      paymentAPI.middleware,
      userAPI.middleware,
      productAPI.middleware,
      orderAPI.middleware,
      productAPI.middleware,
    ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
