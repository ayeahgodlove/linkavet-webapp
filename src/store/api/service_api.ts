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
    }),
    getSingleServiceBySlug: build.query<IService, string>({
      query: (slug) => `/services/slugs/${slug}`,
    }),
    fetchAllServices: build.query<IService[], number | ISort>({
      query: (page = 1) => `/services?page=${page}`,
      // query: ({ searchTitle, sortBy, }) => {
      //   let queryString = `services?q=${searchTitle}`;
      //   if (sortBy === "date") {
      //     queryString += "&_sort=date&_order=desc";
      //   } else if (sortBy === "title") {
      //     queryString += "&_sort=title&_order=asc";
      //   } else if (sortBy === "author") {
      //     queryString += "&_sort=author&_order=desc";
      //   }
       
      //   return queryString;
      // }, 
      providesTags: (result) => ["Service"],
    }),
  }),
});
