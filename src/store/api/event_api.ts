import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@constants/api-url";
import { IEvent } from "@model/event.model";

export const eventAPI = createApi({
  reducerPath: "eventAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Event"],
  endpoints: (build) => ({
    getSingleEvent: build.query<IEvent, string>({
      query: (eventId) => `/events/${eventId}`,
      transformResponse: (response: any) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
      providesTags: (result, error, id) => [{ type: "Event", id }],
    }),
    fetchAllEvents: build.query<IEvent[], number | void>({
      query: (page = 1) => `/events?page=${page}`,
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
              ...result.map(({ id }) => ({ type: "Event", id } as const)),
              { type: "Event", id: "LIST" },
            ]
          : [{ type: "Event", id: "LIST" }],
    }),
    addEvent: build.mutation<IEvent, Partial<IEvent>>({
      query: (newEvent) => ({
        url: `/events`,
        method: "POST",
        body: newEvent,
      }),
      invalidatesTags: [{ type: "Event", id: "LIST" }],
    }),
    editEvent: build.mutation<IEvent, Partial<IEvent>>({
      query: ({ id, ...patch }) => ({
        url: `/events/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Event", id }],
    }),
    deleteEvent: build.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/events/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Event", id }],
    }),
  }),
});
