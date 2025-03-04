import { BASE_URL } from "@constants/api-url";
import { IAppointment } from "@model/health/appointment";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appointmentAPI = createApi({
  reducerPath: "appointmentAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Appointment"],
  endpoints: (build) => ({
    getSingleAppointment: build.query<IAppointment, string>({
      query: (appointmentId) => `/appointments/${appointmentId}`,
      transformResponse: (response: any) => ({
        ...response,
        createdAt: new Date(response.createdAt).toISOString(), // Ensure createdAt is a string
      }),
    }),
    fetchAllAppointments: build.query<IAppointment[], number | void>({
      query: (page = 1) => `/appointments?page=${page}`,
      transformResponse: (response: any[]) => {
        // Ensure each category's createdAt field is an ISO string
        const transformedAppointments = response.map((appointment: any) => ({
          ...appointment,
          createdAt: new Date(appointment.createdAt).toISOString(), // Convert date to ISO string
        }));
        return transformedAppointments;
      },
    }),
  }),
});
