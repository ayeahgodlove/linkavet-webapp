import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@constants/api-url";
import { IOrder } from "@model/order.model";

export const orderAPI = createApi({
  reducerPath: "orderAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Order"],
  endpoints: (build) => ({
    getSingleOrder: build.query<IOrder, string>({
      query: (orderId) => `/orders/${orderId}`,
    }),
    fetchAllOrders: build.query<IOrder[], number | void>({
      query: (page = 1) => `/orders?page=${page}`,
    }),
  }),
});
