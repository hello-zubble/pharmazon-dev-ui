import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D2939",
          content: "FFF"
        },
        secondary: {
          DEFAULT: "#816BE3",
          content: "FFF"
        },
        accent: {
          primary: {
            DEFAULT: "#F49819",
            content: "#FFF"
          },
          secondary: {
            DEFAULT: "#04881B",
            content: "#FFF"
          },
          default: {
            DEFAULT: "#F49819",
            content: "#FFF"
          },
        }
      }
    },
  },
  plugins: [],
};
export default config;
