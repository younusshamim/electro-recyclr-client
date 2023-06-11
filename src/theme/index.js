import { extendTheme } from "@chakra-ui/react";
import config from "./config";
import direction from "./direction";
import colors from "./foundations/colors";
import components from "./foundations/components";

const theme = extendTheme({
  direction,
  colors,
  components,
  config,
});

export default theme;
