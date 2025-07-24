// src/theme/recipes/button.recipe.ts
import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "bold",
    borderRadius: "4px",
    _focusVisible: {
      outline: "2px solid",
      outlineOffset: "2px",
      outlineColor: "orange.500",
    },
    // baseスタイルにブレイクポイントを追加
    // 例えば、デフォルトのボタンのパディングをモバイルとPCで変える
    px: { base: "16px", md: "24px" }, // モバイルでは16px、md以上の画面幅では24px
    py: { base: "8px", md: "12px" },  // モバイルでは8px、md以上の画面幅では12px
    fontSize: { base: "sm", md: "md" }, // モバイルではsmサイズ、md以上ではmdサイズ
  },

  variants: {
    variant: {
      solid: {
        bg: "cc.bg",
        color: "cc.text",
        _hover: {
          bg: "cc.bgh",
          _disabled: {
            bg: "cc.bgh",
          },
          color: "cc.texth",
        },
        _active: {
          bg: "brand.700",
        },
      },
      // ... その他のバリアント
    },

    size: {
      md: {
        // mdサイズの定義にブレイクポイントを追加
        height: { base: "40px", md: "48px" }, // モバイルmdは40px、PCmdは48px
        px: { base: "16px", md: "20px" },     // サイズごとのパディングもブレイクポイントで調整
        fontSize: { base: "xs", md: "sm" },  // サイズごとのフォントサイズも調整
      },
      // ... 他のサイズ
    },
  },

  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});