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
      transformResponse: (response: any) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    fetchAllReviews: build.query<IReview[], number | void>({
      query: (page = 1) => `/reviews?page=${page}`,
      transformResponse: (response: any[]) => {
        // Ensure each category's createdAt field is an ISO string
        const transformedCategories = response.map((category: any) => ({
          ...category,
          createdAt: new Date(category.createdAt).toISOString(), // Convert date to ISO string
        }));
        return transformedCategories;
      },
    }),
  }),
});
