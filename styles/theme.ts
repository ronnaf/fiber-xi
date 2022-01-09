import {extendTheme} from "@chakra-ui/react";
import {createBreakpoints, StyleConfig} from "@chakra-ui/theme-tools";

/**
 * Based on Bootsrap 5.0 breakpoints
 * @see https://getbootstrap.com/docs/5.0/layout/breakpoints/#max-width
 */
const breakpoints = createBreakpoints({
  // X-Small devices (portrait phones, less than 576px)
  // No media query for `xs` since this is the default in Bootstrap
  // Small devices (landscape phones, 576px and up)
  sm: "576px",
  // Medium devices (tablets, 768px and up)
  md: "768px",
  // Large devices (desktops, 992px and up)
  lg: "992px",
  // X-Large devices (large desktops, 1200px and up)
  xl: "1200px",
  // XX-Large devices (larger desktops, 1400px and up)
  "2xl": "1400px",
});

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
  breakpoints,
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
