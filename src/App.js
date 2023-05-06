import { ChakraProvider, Text } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Routes";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={Routes} />
    </ChakraProvider>
  );
}

export default App;
