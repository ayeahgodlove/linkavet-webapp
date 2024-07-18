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
import { categoryReducer } from "./slice/category.slice";
import { userReducer } from "./slice/user.slice";
import { productReducer } from "./slice/product.slice";
import { tagReducer } from "./slice/tag.slice";
import { postReducer } from "./slice/post.slice";
import { documentReducer } from "./slice/document.slice";
import { orderReducer } from "./slice/order.slice";
import { paymentReducer } from "./slice/payment.slice";
import { reviewReducer } from "./slice/review.slice";
import { storeReducer } from "./slice/store.slice";
import { bannerReducer } from "./slice/banner.slice";
import { userRoleReducer } from "./slice/user-role.slice";
import { roleReducer } from "./slice/role.slice";
import { specialtyReducer } from "./slice/specialty.slice";
import { eventReducer } from "./slice/event.slice";
import { subscriberReducer } from "./slice/subscriber.slice";
import { mailReducer } from "./slice/mail.slice";
import { contactReducer } from "./slice/contact.slice";
import { appointmentReducer } from "./slice/health/appointment.slice";
import { consultationReducer } from "./slice/health/consultation.slice";
import { userDocReducer } from "./slice/user-doc.slice";
import { quizReducer } from "./slice/lms/quiz.slice";
import { enrollmentReducer } from "./slice/lms/enrollment.slice";
import { lessonReducer } from "./slice/lms/lesson.slice";
import { courseReducer } from "./slice/lms/course.slice";
import { commentReducer } from "./slice/comment.slice";
import { eventAPI } from "./api/event_api";
import { tagAPI } from "./api/tag_api";
import { postAPI } from "./api/post_api";
import { serviceAPI } from "./api/service_api";

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
  [eventAPI.reducerPath]: eventAPI.reducer,
  [tagAPI.reducerPath]: tagAPI.reducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [serviceAPI.reducerPath]: serviceAPI.reducer,
  cart: cartReducer,
  category: categoryReducer,
  user: userReducer,
  product: productReducer,
  tag: tagReducer,
  post: postReducer,
  document: documentReducer,
  order: orderReducer,
  payment: paymentReducer,
  review: reviewReducer,
  banner: bannerReducer,
  store: storeReducer,
  comment: commentReducer,
  course: courseReducer,
  lesson: lessonReducer,
  enrollment: enrollmentReducer,
  quiz: quizReducer,
  // health
  consultation: consultationReducer,
  appointment: appointmentReducer,

  // roles
  userRole: userRoleReducer,
  role: roleReducer,
  specialty: specialtyReducer,
  event: eventReducer,
  subscriber: subscriberReducer,
  mail: mailReducer,
  contact: contactReducer,
  userDoc: userDocReducer,
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
      eventAPI.middleware,
      tagAPI.middleware,
      postAPI.middleware,
      serviceAPI.middleware,
    ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
