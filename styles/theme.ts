import { extendTheme, ThemingProps } from "@chakra-ui/react";
import { StyleConfig } from "@chakra-ui/theme-tools";

const Button: StyleConfig = {
  baseStyle: {
    borderRadius: "base",
    fontWeight: "bold",
  },
  variants: {
    solid: {
      bg: "brand.500",
      color: "white",
    },
    link: {
      color: "brand.500",
      textDecoration: "underline",
    },
    "inverted-solid": {
      color: "brand.500",
      bg: "white",
    },
    outline: {
      color: "brand.500",
    },
  },
  sizes: {
    md: {
      px: 6,
      py: 7,
    },
    sm: {
      py: 6,
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
};

export const theme = extendTheme({
  colors: {
    brand: {
      "50": "#EEE8FD",
      "100": "#D0BEF9",
      "200": "#B193F5",
      "300": "#9369F1",
      "400": "#753FEE",
      "500": "#5615EA",
      "600": "#4511BB",
      "700": "#340D8C",
      "800": "#22085E",
      "900": "#11042F",
    },
    secondary: "#43B29E",
    background: "#FBF8F3",
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  components: {
    Button,
  },
});
