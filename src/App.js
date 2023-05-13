import { ChakraProvider, Text } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Routes";
import theme from "./theme";
import AuthProvider from "./contexts/AuthProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={Routes} />
        <Toaster />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
