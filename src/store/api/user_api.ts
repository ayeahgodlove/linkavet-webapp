import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@constants/api-url";
import { IUser } from "@model/user.model";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getSingleUser: build.query<IUser, string>({
      query: (userId) => `/users/${userId}`,
      transformResponse: (response: any) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    fetchAllUsers: build.query<IUser[], number | void>({
      query: (page = 1) => `/users?page=${page}`,
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
