import { makeTheme } from "dripsy";
import { Colors, ThemeColors } from "./Colors";

const darkColors = {
  $text: ThemeColors.dark.text,
  $background: ThemeColors.dark.background,
  $primary: ThemeColors.dark.primary,
};

const lightColors: typeof darkColors = {
  $text: ThemeColors.light.text,
  $background: ThemeColors.light.background,
  $primary: ThemeColors.light.primary,
};

export const theme = makeTheme({
  colors: darkColors,
  space: {
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
  },
  fontSizes: {
    $0: 12,
    $1: 14,
    $2: 16,
    $3: 18,
    $4: 24,
    $5: 28,
    $6: 32,
    $7: 36,
    $8: 40,
    $9: 44,
    $10: 48,
  },
  borderStyles: {
    mainRadius: {
      borderRadius: 20,
    },
  },
  text: {
    h1: {
      fontSize: "$4",
    },
    p: {
      fontSize: "$0", // 12px from `fontSizes`
      mb: "$3", // 16px from `space`
    },
    big: {
      fontSize: "$6",
      fontFamily: "SSFaster",
    },
    thick: {
      fontFamily: "AntonRegular",
      fontWeight: "condensedBold",
    },
    semiBold: {
      fontFamily: "OswaldSemiBold",
      fontSize: "$4",
    },
    regular: {
      fontFamily: "OswaldRegular",
      fontSize: "$2",
    },
    medium: {
      fontFamily: "OswaldMedium",
      fontSize: "$4",
    },
    kanitRegular: {
      fontFamily: "KanitRegular",
      fontSize: "$2",
    },
    kanitMedium: {
      fontFamily: "KanitRegular",
      fontSize: "$4",
    },
    buttonText: {
      fontFamily: "KanitRegular",
      fontSize: "$3",
      color: Colors.gray[0],
    },
  },
  shadows: {
    md: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  },
  textShadows: {
    onImage: {
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
      textShadowColor: "#00000099",
    },
  },
  linearGradients: {
    sunny: [Colors.yellow[5], Colors.purple[4]],
    purpleRain: [Colors.purple[10], Colors.purple[20], Colors.gray[11]],
    dark: [Colors.gray[10], Colors.gray[12], Colors.gray[14]],
    profileLight: [Colors.yellow[0], Colors.orange[1], Colors.purple[0]],
    profileDark: [Colors.gray[13], Colors.gray[10], Colors.gray[15]],
    registerDark: [Colors.gray[9], Colors.gray[13], Colors.gray[15]],
    proButton: [Colors.yellow[1], Colors.yellow[3], Colors.gold[3]],
    proButtonDark: [Colors.yellow[4], Colors.gold[10]],
  },
  layout: {
    mainContainer: {
      px: "$2",
      pt: "$3",
      flex: 1,
    },
    mediaListItemDescription: {
      p: "$4",
      flex: 1,
      justifyContent: "flex-end",
    },
    centerContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
});

type MyTheme = typeof theme;
declare module "dripsy" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends MyTheme {}
}

export const themeLight = {
  ...theme,
  colors: lightColors,
};
