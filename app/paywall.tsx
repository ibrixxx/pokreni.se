import { ImageBackground, Platform, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, Text, View } from "dripsy";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import PaperButton from "@/components/buttons/PaperButton";
import { BlurView } from "expo-blur";
import { useTheme } from "@/hooks/useTheme";
import { useNavigation } from "expo-router";
import TransparentButton from "@/components/buttons/TransparentButton";

const PaywallScreen = () => {
  const navigation = useNavigation();
  const { theme: appTheme } = useTheme();
  const isDarkTheme = appTheme === "dark";
  const [selected, setSelected] = useState<"yr" | "mo" | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <BlurView
        intensity={70}
        tint={isDarkTheme ? "dark" : "light"}
        style={styles.blurContainer}
      />
      <ImageBackground
        source={require("@/assets/images/paywall.jpg")}
        style={[StyleSheet.absoluteFill, { zIndex: 1 }]}
      />
      <View
        variant="layout.mainContainer"
        sx={{
          justifyContent: "flex-end",
          zIndex: 3,
          paddingHorizontal: "$4",
        }}
      >
        <Ionicons
          name="close-circle"
          size={40}
          onPress={() => navigation.goBack()}
          color={Colors.gray[5]}
          style={styles.closeButton}
        />
        <View
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            mt: "$5",
          }}
        >
          <Text
            sx={{
              color: Colors.gold[10],
              fontFamily: "SSFaster",
              fontSize: "$10",
              textShadow: "onImage",
            }}
          >
            PRO
          </Text>
        </View>
        <View style={styles.bottomContent}>
          <View sx={{ mb: "$5", width: "100%" }}>
            <TransparentButton
              onPress={() => setSelected("yr")}
              text="19.99 $ / year"
              selected={selected === "yr"}
              opacity={0.5}
              style={styles.buttonStyle}
            />
            <TransparentButton
              onPress={() => setSelected("mo")}
              text="4.99 $ / month"
              selected={selected === "mo"}
              opacity={0.5}
              style={styles.buttonStyle}
            />
          </View>
          <PaperButton disabled={!selected} buttonColor={Colors.gold[12]}>
            <Text variant="buttonText">subscribe</Text>
          </PaperButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaywallScreen;

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: Platform.OS === "ios" ? 0 : 42 },
  closeButton: {
    top: 12,
    right: 24,
    position: "absolute",
    opacity: 0.6,
    zIndex: 4,
    borderRadius: 20,
  },
  bottomContent: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 3,
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: { marginBottom: 8, width: "100%" },
});
