import { DefaultTheme, MD3Theme } from "react-native-paper"


const darkTheme: MD3Theme = {
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

export {darkTheme};