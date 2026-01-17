import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// create client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
