import React from "react";
import { Stack } from "expo-router";
import { DripsyProvider } from "dripsy";
import { useTheme } from "@/hooks/useTheme";
import { theme as darkTheme, themeLight } from "@/constants/DripsyMakeTheme";

const Routing = () => {
  const { theme } = useTheme();

  return (
    <DripsyProvider theme={theme === "dark" ? darkTheme : themeLight}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="paywall"
          options={{
            headerShown: false,
            presentation: "fullScreenModal",
            headerBackVisible: true,
          }}
        />
        <Stack.Screen
          name="liked"
          options={{
            headerShown: true,
            headerBackTitle: "back",
            headerSearchBarOptions: { placeholder: "Search" },
            headerTransparent: true,
            headerBlurEffect: "regular",
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </DripsyProvider>
  );
};

export default Routing;
