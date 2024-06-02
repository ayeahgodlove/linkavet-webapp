import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryAPI } from "./api/category_api";
import { userAPI } from "./api/user_api";
import { productAPI } from "./api/product_api";
import { orderAPI } from "./api/order_api";
import { paymentAPI } from "./api/payment_api";
import { reviewAPI } from "./api/review_api";
import logger from "redux-logger";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./slice/cart.slice";

// Persist configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

export const rootReducer = combineReducers({
  [categoryAPI.reducerPath]: categoryAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [productAPI.reducerPath]: productAPI.reducer,
  [orderAPI.reducerPath]: orderAPI.reducer,
  [paymentAPI.reducerPath]: paymentAPI.reducer,
  [reviewAPI.reducerPath]: reviewAPI.reducer,
  cart: cartReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      logger,
      categoryAPI.middleware,
      paymentAPI.middleware,
      userAPI.middleware,
      productAPI.middleware,
      orderAPI.middleware,
      productAPI.middleware,
      reviewAPI.middleware,
    ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
