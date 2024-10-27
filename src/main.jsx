import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx"; // Use App as the main layout
import "./index.css";
import Products from "./pages/Products.jsx";
import Sales from "./pages/Sales.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev/index.js";

const router = createBrowserRouter([
  {
    path: "/", // Root route
    element: <App />, // Use App as the layout
    errorElement: <NotFound />, // Display if route is not found
    children: [
      {
        index: true, // Set this as the default route (Home page)
        element: <Home />, // Render Home component when at "/"
      },
      {
        path: "products", // /products route
        element: <Products />,
      },
      {
        path: "sales", // /sales route
        element: <Sales />,
      },
      {
        path: "contact", // /contact route
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <RouterProvider router={router} />
    </DevSupport>
  </StrictMode>,
);
