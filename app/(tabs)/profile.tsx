import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import SafeAreaViewDripsy from "@/components/themed/SafeAreaViewDripsy";
import ViewDripsy from "@/components/themed/ViewDripsy";
import { useDripsyTheme, View } from "dripsy";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { useTheme } from "@/hooks/useTheme";
import TextDripsy from "@/components/themed/TextDripsy";

const ProfileScreen = () => {
  const { theme } = useDripsyTheme();
  const { theme: appTheme } = useTheme();
  const isDarkTheme = appTheme === "dark";

  return (
    <SafeAreaViewDripsy style={styles.container}>
      <ViewDripsy variant="layout.mainContainer">
        <View
          sx={{
            height: (Dimensions.get("window").height / 9) * 5,
            boxShadow: "md",
            borderRadius: 20,
          }}
        >
          <LinearGradient
            colors={
              isDarkTheme
                ? theme.linearGradients.profileDark
                : theme.linearGradients.profileLight
            }
            style={styles.gradient}
          />
          <BlurView
            intensity={isDarkTheme ? 100 : 30}
            tint="dark"
            style={styles.blurContainer}
          >
            <TextDripsy variant="text.h1">Profile pic</TextDripsy>
            <TextDripsy variant="text.h1">username</TextDripsy>
            <TextDripsy variant="text.h1">edit button</TextDripsy>
            <TextDripsy variant="text.h1">liked media</TextDripsy>
            <TextDripsy variant="text.h1">subscription</TextDripsy>
            <TextDripsy variant="text.h1">
              number of steps overall / progress
            </TextDripsy>
            <TextDripsy variant="text.h1">theme change</TextDripsy>
            <TextDripsy variant="text.h1">theme change</TextDripsy>
            <TextDripsy variant="text.h1">buy me a coffee</TextDripsy>
          </BlurView>
        </View>
      </ViewDripsy>
    </SafeAreaViewDripsy>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    zIndex: 1,
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
    borderRadius: 20,
    zIndex: 2,
  },
});
