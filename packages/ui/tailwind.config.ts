import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";
import { nextui } from "@nextui-org/react";

const config: Pick<Config, "prefix" | "presets" | "content" | "plugins"> = {
  content: ["./src/**/*.tsx"],
  prefix: "ui-",
  presets: [sharedConfig],
  plugins: [nextui({
    addCommonColors: true,
  })],
};

export default config;
