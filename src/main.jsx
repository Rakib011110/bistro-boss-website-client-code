import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider";
import { useQueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = useQueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-screen-xl mx-auto">
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </div>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
