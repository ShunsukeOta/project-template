import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { buttonRecipe } from "./recipes/button.recipe";

const customConfig = defineConfig({

  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#E6F0FF" },
          100: { value: "#BFD7FF" },
          200: { value: "#99BDFF" },
          300: { value: "#70A2FF" },
          400: { value: "#4A86FF" },
          500: { value: "#2A64ED" }, // 主要な色
          600: { value: "#1D52C0" },
          700: { value: "#144299" },
          800: { value: "#0B2D6D" },
          900: { value: "#051D4A" },
        },
        myCustomColor: {
          white: {value: "#f8f8f8"},
          black: {value: "#333333"},
          main: {value: "#334455"},
        },
        cc: {
          bg: {value: "#333"},
          text: {value: "#f8f8f8"},
          bgh: {value: "#f8f8f8"},
          texth: {value: "#333"},
        }
      },
    },
    recipes: {
      button: buttonRecipe, // 'Button'というキー名でbuttonRecipeを登録
    },
  }
});

export const system = createSystem(defaultConfig, customConfig);
export type System = typeof system;