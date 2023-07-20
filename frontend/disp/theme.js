// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#FF5733",
    secondary: "#3399FF",
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Georgia, serif",
  },
  // Add more customizations as needed...
});

export default theme;
