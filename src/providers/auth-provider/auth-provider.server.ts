import { AuthProvider } from "@refinedev/core";
import { cookies } from "next/headers";

export const authProviderServer: Pick<AuthProvider, "check" | "getIdentity"> = {
  check: async () => {
    const cookieStore = cookies();
    const auth = cookieStore.get("auth");

    if (auth) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      logout: true,
      redirectTo: "/login",
    };
  },
  getIdentity: async () => {
    const cookieStore = cookies();
    const auth = cookieStore.get("auth");

    if (auth) {
      // Assuming 'auth' cookie contains user information in JSON format
      const user = JSON.parse(auth.value);

      return {
        ...user, // or any other user information you want to include
      };
    }

    return null; // or handle it accordingly if the user information is not found
  },
};
