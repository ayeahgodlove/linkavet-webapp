"use client";


import axios from "axios";
import dataProviderSimpleRest from "@refinedev/simple-rest";
import { TOKEN_KEY } from "@constants/constant";
import { API_URL } from "@constants/api-url";

const axiosInstance = () => {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "",
    };
  
    if (typeof window !== "undefined") {
      const token = JSON.parse(window.localStorage.getItem(TOKEN_KEY)!);
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }
  
    return axios.create({
      // baseURL: API_URL, // Replace with your API base URL
      headers,
    });
  };
  
  export const dataProvider = dataProviderSimpleRest(API_URL, axiosInstance());
