import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/Router";
import AuthProvider from "./Authentication/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import ProductProvider from "./ProductProvider/ProductProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <RouterProvider router={router} />
        <Toaster></Toaster>
      </ProductProvider>
    </AuthProvider>
  </StrictMode>
);
