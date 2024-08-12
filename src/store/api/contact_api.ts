import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@constants/api-url";
import { IContact } from "@model/contact";

export const contactAPI = createApi({
  reducerPath: "contactAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Contact"],
  endpoints: (build) => ({
    getSingleContact: build.query<IContact, string>({
      query: (contactId) => `/contacts/${contactId}`,
      transformResponse: (response: any) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
      providesTags: (result, error, id) => [{ type: "Contact", id }],
    }),
    fetchAllContacts: build.query<IContact[], number | void>({
      query: (page = 1) => `/contacts?page=${page}`,
      transformResponse: (response: any[]) => {
        // Ensure each category's createdAt field is an ISO string
        const transformedCategories = response.map((category: any) => ({
          ...category,
          createdAt: new Date(category.createdAt).toISOString(), // Convert date to ISO string
        }));
        return transformedCategories;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Contact", id } as const)),
              { type: "Contact", id: "LIST" },
            ]
          : [{ type: "Contact", id: "LIST" }],
    }),
    addContact: build.mutation<IContact, Partial<IContact>>({
      query: (newContact) => ({
        url: `/contacts`,
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: [{ type: "Contact", id: "LIST" }],
    }),
    editContact: build.mutation<IContact, Partial<IContact>>({
      query: ({ id, ...patch }) => ({
        url: `/contacts/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Contact", id }],
    }),
    deleteContact: build.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Contact", id }],
    }),
  }),
});
