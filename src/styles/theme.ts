import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "100": "#FFBA08",
      "200": "rgba(255, 186, 8, 0.5)",
    },
    Dark: {
      "100": "#000000",
    },
    blue: {
      "100": "#5965E0",
    },
    background: {
      "100": "#1B2430",
      "50": "#313943",
    },
    green: {
      "100": "#04D361",
    },
    red: {
      "100": "#F32424",
    },

    white: {
      "100": "#FFFFFF",
      "300": "#dadada",
      "400": "rgba(153, 153, 153, 0.5)",
      "700": "#47585B",
      "500": "#999999",
    },
  },
  layerStyles: {
    baseX: {
      bg: "blue.100",
    },
    baseO: {
      bg: "yellow.100",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "background.100",
        color: "light.80",
        fontFamily: "fonnts.Poppins",
      },
    },
  },
});
