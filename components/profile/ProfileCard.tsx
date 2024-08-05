import { StyleSheet } from "react-native";
import React from "react";
import { Image, Row, Text, useDripsyTheme, View } from "dripsy";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Colors, ThemeColors } from "@/constants/Colors";
import { useTheme } from "@/hooks/useTheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Switch } from "react-native-paper";
import { Link } from "expo-router";
import TransparentButton from "../buttons/TransparentButton";

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
            borderRadius: theme.space.$4,
            borderWidth: theme.space.$1,
            borderColor: ThemeColors[appTheme!].tabBarBackground,
            marginBottom: theme.space.$1,
          }}
        />

        <Text
          variant="kanitMedium"
          sx={{ color: ThemeColors[appTheme!].profileContent }}
        >
          username
        </Text>

        <View style={styles.actions}>
          <Link push href={"/paywall"} asChild>
            <TransparentButton
              text={IS_PRO ? "PRO" : "become a PRO"}
              icon={
                <MaterialCommunityIcons
                  name="crown-circle"
                  size={32}
                  color={Colors.gold[14]}
                />
              }
              gradient={IS_PRO}
              opacity={0.1}
              style={styles.buttonContainer}
            />
          </Link>
          <Link push href={"/liked"} asChild>
            <TransparentButton
              text="liked"
              icon={<AntDesign name="heart" size={24} color={Colors.red[4]} />}
              opacity={0.1}
              style={styles.buttonContainer}
            />
          </Link>
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
  buttonContainer: { width: "80%", marginBottom: 8 },
});
