import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@constants/api-url";
import { IReview } from "@model/review.model";

export const reviewAPI = createApi({
  reducerPath: "reviewAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Review"],
  endpoints: (build) => ({
    getSingleReview: build.query<IReview, string>({
      query: (reviewId) => `/reviews/${reviewId}`,
    }),
    fetchAllReviews: build.query<IReview[], number | void>({
      query: (page = 1) => `/reviews?page=${page}`,
    }),
  }),
});
