import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Routes";
import theme from "./theme";
import AuthProvider from "./contexts/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "react-query";
import queryClient from "./config/queryClient/queryClient";
import FilterProvider from "./contexts/FilterProvider";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <FilterProvider>
            <RouterProvider router={Routes} />
            <Toaster />
          </FilterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
