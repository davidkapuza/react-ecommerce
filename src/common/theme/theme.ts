import "styled-components"

export type ITheme = typeof theme

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}

const theme = {
  media: {
    Small: "576px",
    Medium: "768px",
    Large: "992px",
    XLarge: "1200px",
  },
  colors: {
    Black: "#000000",
    SecondaryBlack: "#1D1F22",
    LightBlack: "#43464E",
    White: "#ffffff",
    Gray: "#8D8F9A",
    LightGray: "#EEEEEE",
    Green: "#5ECE7B",
    SecondaryGreen: "#5ECE7B"
  },
  shadows: {
    ProductCardShadow: "0px 4px 35px rgba(168, 172, 176, 0.19);",
    DropDownShadow: "drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19))"
  },
  sizes: {
    NavBarHeight: "80px",
  }
}

export default theme;