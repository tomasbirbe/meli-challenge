import { extendTheme, theme } from "@chakra-ui/react";
import { cssReset } from "src/cssCustomReset";

export default extendTheme({
  styles: {
    global: {
      ...cssReset,
      "input::placeholder": {
        color: "blackAlpha.300",
      },
    },
  },
  shadows: {
    innerLg: "inset 0px 5px 6px -6px rgba(0,0,0,0.5)",
  },

  colors: {
    primary: {
      50: "#FFF9BD",
      100: "#FFF693",
      200: "#FFF693",
      300: "#FFF583",
      400: "#FFF372",
      500: "#fff159",
      600: "#E6D950",
      700: "#CCC147",
      800: "#BFB543",
      900: "#BFB543",
    },
    secondary: {
      ...theme.colors.messenger,
      100: theme.colors.messenger[50],
      50: `rgba(65,137,230,.15)`,
    },
    success: theme.colors.whatsapp,
    error: theme.colors.red,
    warning: theme.colors.orange,
  },
  sizes: {
    container: {
      xl: "1200px",
    },
  },
  fonts: {
    body: "Proxima Nova",
    heading: "Proxima Nova",
  },
  components: {
    Text: {
      variants: {
        truncateMultiline: {
          display: "-webkit-box",
          "-webkit-line-clamp": "2",
          "-webkit-box-orient": "vertical",
          textOverflow: "ellipsis",
          overflow: "hidden",
        },
      },
    },
    Link: {
      variants: {
        unstyled: ({ colorScheme = "blackAlpha" }) => ({
          color: `${colorScheme}.700`,
          _hover: {
            color: `${colorScheme}.800`,
            textDecoration: "none",
          },
        }),
        color: ({ colorScheme = "secondary" }) => ({
          color: `${colorScheme}.500`,
          _hover: {
            color: `${colorScheme}.600`,
            textDecoration: "none",
          },
        }),
      },
      defaultProps: {
        variant: "color",
      },
    },
    Button: {
      sizes: {
        lg: {
          fontSize: "md",
        },
      },
      variants: {
        ghost: ({ colorScheme = "secondary" }) => ({
          backgroundColor: `${colorScheme}.50`,
          ":hover, :focus": {
            backgroundColor: `${colorScheme}.100`,
          },
        }),
        unstyled: {
          backgroundColor: "transparent",
          hover: {},
          active: {},
          focus: {},
          padding: 0,
          margin: 0,
        },
      },
    },
    Input: {
      parts: ["field"],
      defaultProps: {
        focusBorderColor: "secondary.500",
      },
      variants: {
        filled: {
          field: {
            borderRadius: "sm",
            color: "blackAlpha.800",
            backgroundColor: "white",
            ":hover, :focus": {
              backgroundColor: "white",
            },
          },
        },
        outline: {
          field: {
            borderColor: "gray.300",
          },
        },
        searchbar: {},
      },
    },
  },
});
