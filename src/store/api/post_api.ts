import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@constants/api-url";
import { IPost } from "@model/post";

interface ISort {
  searchTitle: string;
  sortBy?: "date" | "title" | "author";
}

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    getSinglePost: build.query<IPost, string>({
      query: (postId) => `/posts/${postId}`,
      transformResponse: (response: any) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    getSinglePostBySlug: build.query<IPost, string>({
      query: (slug) => `/posts/slugs/${slug}`,
      transformResponse: (response: any) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    fetchAllPosts: build.query<IPost[], number | ISort>({
      query: (page = 1) => `/posts?page=${page}`,
      transformResponse: (response: any[]) => {
        // Ensure each category's createdAt field is an ISO string
        const transformedCategories = response.map((category: any) => ({
          ...category,
          createdAt: new Date(category.createdAt).toISOString(), // Convert date to ISO string
        }));
        return transformedCategories;
      },
      // query: ({ searchTitle, sortBy, }) => {
      //   let queryString = `posts?q=${searchTitle}`;
      //   if (sortBy === "date") {
      //     queryString += "&_sort=date&_order=desc";
      //   } else if (sortBy === "title") {
      //     queryString += "&_sort=title&_order=asc";
      //   } else if (sortBy === "author") {
      //     queryString += "&_sort=author&_order=desc";
      //   }

      //   return queryString;
      // },
      providesTags: (result) => ["Post"],
    }),
  }),
});
