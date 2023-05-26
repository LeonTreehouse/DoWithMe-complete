import { extendTheme } from "@chakra-ui/react";
import "./pages/App.css"

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

export default theme;
