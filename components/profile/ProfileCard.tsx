import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Image, Row, Text, useDripsyTheme, View } from "dripsy";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Colors, ThemeColors } from "@/constants/Colors";
import { useTheme } from "@/hooks/useTheme";
import TextDripsy from "@/components/themed/TextDripsy";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Switch } from "react-native-paper";

const IS_PRO = false;

const ProfileCard = () => {
  const { theme } = useDripsyTheme();
  const { theme: appTheme, setTheme } = useTheme();
  const isDarkTheme = appTheme === "dark";

  return (
    <View
      sx={{
        height: "70%",
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
        intensity={isDarkTheme ? 100 : 100}
        tint={isDarkTheme ? "dark" : "light"}
        style={styles.blurContainer}
      >
        <FontAwesome
          name="edit"
          size={27}
          color={ThemeColors[appTheme!].profileContent}
          style={styles.edit}
        />

        <Image
          source={require("@/assets/images/blank_profile.jpeg")}
          style={{
            height: theme.space.$6,
            width: theme.space.$6,
            borderRadius: theme.space.$5,
            borderWidth: theme.space.$1,
            borderColor: ThemeColors[appTheme!].tabBarBackground,
            marginBottom: theme.space.$1,
          }}
        />

        <Text
          variant="medium"
          sx={{ color: ThemeColors[appTheme!].profileContent }}
        >
          username
        </Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            {IS_PRO ? (
              <LinearGradient
                colors={
                  isDarkTheme
                    ? theme.linearGradients.proButtonDark
                    : theme.linearGradients.proButton
                }
                style={styles.gradientMask}
              />
            ) : (
              <View style={styles.mask} />
            )}
            <Row style={styles.buttonText2}>
              <MaterialCommunityIcons
                name="crown-circle"
                size={32}
                color={Colors.gold[14]}
              />
              <TextDripsy
                variant="text.regular"
                style={{
                  marginLeft: theme.space.$1,
                  fontSize: theme.fontSizes.$3,
                }}
              >
                {IS_PRO ? "PRO" : "become a PRO"}
              </TextDripsy>
            </Row>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.mask} />
            <Row style={styles.buttonText}>
              <AntDesign name="heart" size={24} color={Colors.red[4]} />
              <TextDripsy
                variant="text.regular"
                style={{
                  marginLeft: theme.space.$1,
                  fontSize: theme.fontSizes.$3,
                }}
              >
                liked
              </TextDripsy>
            </Row>
          </TouchableOpacity>
        </View>

        <Row style={styles.themeChange}>
          {isDarkTheme ? (
            <MaterialIcons name="dark-mode" size={24} color={Colors.gray[10]} />
          ) : (
            <MaterialIcons
              name="light-mode"
              size={24}
              color={Colors.yellow[15]}
            />
          )}
          <Switch
            style={styles.switch}
            color={Colors.yellow[4]}
            value={!isDarkTheme}
            onChange={() => setTheme(appTheme === "dark" ? "light" : "dark")}
          />
        </Row>
      </BlurView>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    zIndex: 1,
  },
  edit: {
    position: "absolute",
    top: 24,
    right: 24,
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
    borderRadius: 20,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  actions: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 24,
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: "80%",
    marginBottom: 8,
  },
  mask: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    backgroundColor: Colors.gray[5],
    opacity: 0.1,
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
  buttonText2: { justifyContent: "center", alignItems: "center" },
  switch: {
    marginHorizontal: 4,
  },
  themeChange: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 24,
    left: 0,
    right: 0,
  },
});
