import baseApi from "../api";
import type { LoginPayload, LoginResponse } from "./types";

export const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginPayload>({ 
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload
      }),
    }),
  }),
});

//hook to call the api
export const { useLoginMutation } = loginApi;