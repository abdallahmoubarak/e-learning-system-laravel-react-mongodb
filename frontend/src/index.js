import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
const BASE_URL = "http://127.0.0.1:8000/api/v0.1";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey: [url] }) => {
        if (typeof url === "string") {
          const { data } = await axios.get(`${BASE_URL}/${url}`);
          return data;
        }
        throw new Error("Invalid QueryKey");
      },
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
);
