import { DefaultTheme } from "react-native-paper"
const lightTheme = {
  ...DefaultTheme,
  colors: {
    "primary": "rgb(135, 82, 0)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(255, 221, 186)",
    "onPrimaryContainer": "rgb(43, 23, 0)",
    "secondary": "rgb(0, 99, 154)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(206, 229, 255)",
    "onSecondaryContainer": "rgb(0, 29, 50)",
    "tertiary": "rgb(85, 99, 60)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(216, 233, 183)",
    "onTertiaryContainer": "rgb(20, 31, 2)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(255, 251, 255)",
    "onBackground": "rgb(31, 27, 22)",
    "surface": "rgb(255, 251, 255)",
    "onSurface": "rgb(31, 27, 22)",
    "surfaceVariant": "rgb(241, 224, 208)",
    "onSurfaceVariant": "rgb(80, 69, 58)",
    "outline": "rgb(130, 117, 104)",
    "outlineVariant": "rgb(212, 196, 181)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(53, 47, 42)",
    "inverseOnSurface": "rgb(249, 239, 231)",
    "inversePrimary": "rgb(255, 184, 101)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(249, 243, 242)",
      "level2": "rgb(245, 238, 235)",
      "level3": "rgb(242, 232, 227)",
      "level4": "rgb(241, 231, 224)",
      "level5": "rgb(238, 227, 219)"
    },
    "surfaceDisabled": "rgba(31, 27, 22, 0.12)",
    "onSurfaceDisabled": "rgba(31, 27, 22, 0.38)",
    "backdrop": "rgba(57, 47, 36, 0.4)"
  }
}

const darkTheme = {
  ...DefaultTheme,
  colors : {
    "primary": "rgb(255, 184, 101)",
    "onPrimary": "rgb(72, 42, 0)",
    "primaryContainer": "rgb(102, 61, 0)",
    "onPrimaryContainer": "rgb(255, 221, 186)",
    "secondary": "rgb(150, 204, 255)",
    "onSecondary": "rgb(0, 51, 83)",
    "secondaryContainer": "rgb(0, 74, 117)",
    "onSecondaryContainer": "rgb(206, 229, 255)",
    "tertiary": "rgb(189, 205, 157)",
    "onTertiary": "rgb(40, 52, 18)",
    "tertiaryContainer": "rgb(62, 75, 39)",
    "onTertiaryContainer": "rgb(216, 233, 183)",
    "error": "rgb(255, 180, 171)",
    "onError": "rgb(105, 0, 5)",
    "errorContainer": "rgb(147, 0, 10)",
    "onErrorContainer": "rgb(255, 180, 171)",
    "background": "rgb(31, 27, 22)",
    "onBackground": "rgb(235, 225, 217)",
    "surface": "rgb(31, 27, 22)",
    "onSurface": "rgb(235, 225, 217)",
    "surfaceVariant": "rgb(80, 69, 58)",
    "onSurfaceVariant": "rgb(212, 196, 181)",
    "outline": "rgb(157, 142, 129)",
    "outlineVariant": "rgb(80, 69, 58)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(235, 225, 217)",
    "inverseOnSurface": "rgb(53, 47, 42)",
    "inversePrimary": "rgb(135, 82, 0)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(42, 35, 26)",
      "level2": "rgb(49, 40, 28)",
      "level3": "rgb(56, 44, 31)",
      "level4": "rgb(58, 46, 32)",
      "level5": "rgb(62, 49, 33)"
    },
    "surfaceDisabled": "rgba(235, 225, 217, 0.12)",
    "onSurfaceDisabled": "rgba(235, 225, 217, 0.38)",
    "backdrop": "rgba(57, 47, 36, 0.4)"
  },
  dark: true
}

export {darkTheme,lightTheme};