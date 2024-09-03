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
import { categoryReducer } from "./slice/category.slice";
import { userReducer } from "./slice/user.slice";
import { productReducer } from "./slice/product.slice";
import { tagReducer } from "./slice/tag.slice";
import { eventReducer } from "./slice/event.slice";

import { eventAPI } from "./api/event_api";
import { tagAPI } from "./api/tag_api";
import { postAPI } from "./api/post_api";
import { serviceAPI } from "./api/service_api";
import { faqAPI } from "./api/faq_api";
import { contactAPI } from "./api/contact_api";
import { paymentMethodReducer } from "./slice/payment-method.slice";
import { initTransactionReducer } from "./slice/init-transaction.slice";
import { bannerReducer } from "./slice/banner.slice";
import { commentReducer } from "./slice/comment.slice";
import { contactReducer } from "./slice/contact.slice";
import { documentReducer } from "./slice/document.slice";

// Persist configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const isProduction = process.env.NODE_ENV === "production";

export const rootReducer = combineReducers({
  [categoryAPI.reducerPath]: categoryAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [productAPI.reducerPath]: productAPI.reducer,
  [orderAPI.reducerPath]: orderAPI.reducer,
  [paymentAPI.reducerPath]: paymentAPI.reducer,
  [reviewAPI.reducerPath]: reviewAPI.reducer,
  [eventAPI.reducerPath]: eventAPI.reducer,
  [tagAPI.reducerPath]: tagAPI.reducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [serviceAPI.reducerPath]: serviceAPI.reducer,
  [faqAPI.reducerPath]: faqAPI.reducer,
  [contactAPI.reducerPath]: contactAPI.reducer,
  category: categoryReducer,
  user: userReducer,
  product: productReducer,
  tag: tagReducer,
  // roles
  event: eventReducer,
  paymentMethod: paymentMethodReducer,
  initTransaction: initTransactionReducer,
  banner: bannerReducer,
  comment: commentReducer,
  contact: contactReducer,
  document: documentReducer,
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
      categoryAPI.middleware,
      paymentAPI.middleware,
      userAPI.middleware,
      productAPI.middleware,
      orderAPI.middleware,
      productAPI.middleware,
      reviewAPI.middleware,
      eventAPI.middleware,
      tagAPI.middleware,
      postAPI.middleware,
      serviceAPI.middleware,
      faqAPI.middleware,
      contactAPI.middleware,
    ]),
  devTools: !isProduction,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
