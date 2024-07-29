import Routing from "@/components/navigation/Stacks/Routing";
import ThemeContextProvider from "@/context/ThemeContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    AntonRegular: require("../assets/fonts/Anton-Regular.ttf"),
    KanitRegular: require("../assets/fonts/Kanit-Regular.ttf"),
    OswaldBold: require("../assets/fonts/Oswald-Bold.ttf"),
    OswaldExtraLight: require("../assets/fonts/Oswald-ExtraLight.ttf"),
    OswaldLight: require("../assets/fonts/Oswald-Light.ttf"),
    OswaldMedium: require("../assets/fonts/Oswald-Medium.ttf"),
    OswaldRegular: require("../assets/fonts/Oswald-Regular.ttf"),
    OswaldSemiBold: require("../assets/fonts/Oswald-SemiBold.ttf"),
    SSFaster: require("../assets/fonts/SS FASTER.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <PaperProvider>
          <Routing />
        </PaperProvider>
      </ThemeContextProvider>
    </SafeAreaProvider>
  );
}
