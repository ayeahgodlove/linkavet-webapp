import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@constants/api-url";
import { IService } from "@model/service";

interface ISort {
  searchTitle: string;
  sortBy?: "title";
}

export const serviceAPI = createApi({
  reducerPath: "serviceAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Service"],
  endpoints: (build) => ({
    getSingleService: build.query<IService, string>({
      query: (serviceId) => `/services/${serviceId}`,
      transformResponse: (response: any) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    getSingleServiceBySlug: build.query<IService, string>({
      query: (slug) => `/services/slugs/${slug}`,
      transformResponse: (response: any) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    fetchAllServices: build.query<IService[], number | ISort>({
      query: (page = 1) => `/services?page=${page}`,
      transformResponse: (response: any[]) => {
        // Ensure each category's createdAt field is an ISO string
        const transformedCategories = response.map((category: any) => ({
          ...category,
          createdAt: new Date(category.createdAt).toISOString(), // Convert date to ISO string
        }));
        return transformedCategories;
      },

      providesTags: (result) => ["Service"],
    }),
  }),
});
