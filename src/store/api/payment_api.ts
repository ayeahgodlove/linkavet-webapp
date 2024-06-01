import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@constants/api-url";
import { IPayment } from "@model/payments.model";

export const paymentAPI = createApi({
  reducerPath: "paymentAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Payment"],
  endpoints: (build) => ({
    getSinglePayment: build.query<IPayment, string>({
      query: (paymentId) => `/payments/${paymentId}`,
    }),
    fetchAllPayments: build.query<IPayment[], number | void>({
      query: (page = 1) => `/payments?page=${page}`,
    }),
  }),
});
