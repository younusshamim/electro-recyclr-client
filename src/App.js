import { ChakraProvider, Text } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./routes/Router";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={Router} />
    </ChakraProvider>
  );
}

export default App;
