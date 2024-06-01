import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@constants/api-url";
import { IProduct } from "@model/product.model";

export const productAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Product"],
  endpoints: (build) => ({
    getSingleProduct: build.query<IProduct, string>({
      query: (productId) => `/products/${productId}`,
    }),
    fetchAllProducts: build.query<IProduct[], number | void>({
      query: (page = 1) => `/products?page=${page}`,
    }),
    fetchAllProductsByCategory: build.query<IProduct[], string | void>({
      query: (category) => `/products/category/${category}`,
    }),
    fetchAllProductsByKeyWord: build.query<IProduct[], string | void>({
      query: (query) => `/products/search/query?q=${query}`,
    }),
  }),
});
