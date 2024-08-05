import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Row, SafeAreaView, Text, useDripsyTheme, View } from "dripsy";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import PaperButton from "@/components/buttons/PaperButton";
import TextDripsy from "@/components/themed/TextDripsy";
import { BlurView } from "expo-blur";
import { useTheme } from "@/hooks/useTheme";
import { useNavigation } from "expo-router";

const PaywallScreen = () => {
  const navigation = useNavigation();
  const { theme } = useDripsyTheme();
  const { theme: appTheme } = useTheme();
  const isDarkTheme = appTheme === "dark";
  const [selected, setSelected] = useState<"yr" | "mo" | null>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          style={{
            top: 12,
            right: 24,
            position: "absolute",
            opacity: 0.6,
            zIndex: 4,
            borderRadius: 20,
          }}
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
            }}
          >
            PRO
          </Text>
        </View>
        <View style={styles.bottomContent}>
          <View sx={{ mb: "$5", width: "100%" }}>
            <TouchableOpacity
              onPress={() => setSelected("yr")}
              style={styles.button}
            >
              <View
                style={selected === "yr" ? styles.maskSelected : styles.mask}
              />
              <Row style={styles.buttonText}>
                <TextDripsy
                  variant="text.kanitRegular"
                  style={{
                    marginLeft: theme.space.$1,
                    fontSize: theme.fontSizes.$3,
                  }}
                >
                  19.99 $ / year
                </TextDripsy>
              </Row>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected("mo")}
              style={styles.button}
            >
              <View
                style={selected === "mo" ? styles.maskSelected : styles.mask}
              />
              <Row style={styles.buttonText}>
                <TextDripsy
                  variant="text.kanitRegular"
                  style={{
                    marginLeft: theme.space.$1,
                    fontSize: theme.fontSizes.$3,
                  }}
                >
                  4.99 $ / month
                </TextDripsy>
              </Row>
            </TouchableOpacity>
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
  button: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 8,
    width: "100%",
  },
  mask: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    backgroundColor: Colors.gray[5],
    opacity: 0.5,
  },
  maskSelected: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    backgroundColor: Colors.gold[10],
    opacity: 0.7,
  },
  gradientMask: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    opacity: 0.5,
  },
  buttonText: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
