import { BASE_URL } from "@constants/api-url";
import { IFaq } from "@model/faq.model";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const faqAPI = createApi({
  reducerPath: "faqAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Faq"],
  endpoints: (build) => ({
    getSingleFaq: build.query<IFaq, string>({
      query: (faqId) => `/faqs/${faqId}`,
      transformResponse: (response: any) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    fetchAllFaqs: build.query<IFaq[], number | void>({
      query: (page = 1) => `/faqs?page=${page}`,
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
