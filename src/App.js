import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Routes";
import theme from "./theme";
import AuthProvider from "./contexts/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "react-query";
import queryClient from "./config/queryClient/queryClient";
import ProductsFilterProvider from "./contexts/ProductsFilterProvider";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ProductsFilterProvider>
            <RouterProvider router={Routes} />
            <Toaster />
          </ProductsFilterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
