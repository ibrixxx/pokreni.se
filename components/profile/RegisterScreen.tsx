import { Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Row, Text, useDripsyTheme, View } from "dripsy";
import { useTheme } from "@/hooks/useTheme";
import { BlurView } from "expo-blur";
import TransparentButton from "@/components/buttons/TransparentButton";
import { Divider } from "react-native-paper";
import { ThemeColors } from "@/constants/Colors";
import PaperTextInput from "../themed/PaperTextInput";
import TextDripsy from "../themed/TextDripsy";
import ThemeSwitch from "../helper/ThemeSwitch";
import { useCallback } from "react";
import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const RegisterScreen = () => {
  const { theme } = useDripsyTheme();
  const { isDarkTheme, theme: appTheme } = useTheme();

  const onGoogleSignIn = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.debug("success: ", userInfo);
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            console.debug(
              "statusCodes.SIGN_IN_CANCELLED: ",
              statusCodes.SIGN_IN_CANCELLED
            );
            break;
          case statusCodes.IN_PROGRESS:
            console.debug("statusCodes.IN_PROGRESS: ", statusCodes.IN_PROGRESS);
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.debug(
              "statusCodes.PLAY_SERVICES_NOT_AVAILABLE: ",
              statusCodes.PLAY_SERVICES_NOT_AVAILABLE
            );
            break;
          default:
            console.debug("some error default ");
        }
      } else {
        console.debug("an error that's not related to google sign in occurred");
      }
    }
  }, []);

  return (
    <View sx={{ flex: 1 }}>
      <LinearGradient
        colors={
          isDarkTheme
            ? theme.linearGradients.registerDark
            : theme.linearGradients.profileLight
        }
        style={styles.gradient}
      />
      <ThemeSwitch style={styles.themeChange} />
      <BlurView
        intensity={100}
        tint={isDarkTheme ? "dark" : "light"}
        style={styles.blurContainer}
      >
        <View sx={styles.title}>
          <TextDripsy variant="text.h1">sign in</TextDripsy>
        </View>
        <View style={styles.registerOptions}>
          <PaperTextInput
            label={"email"}
            placeholder="email"
            style={{ marginBottom: 12 }}
          />
          <PaperTextInput label={"password"} placeholder="password" />
          <Row
            variant="layout.centerContainer"
            sx={{
              mt: "$4",
              mb: "$4",
            }}
          >
            <Divider
              style={{
                backgroundColor: ThemeColors[appTheme!].textSecondary,
                width: "40%",
              }}
            />
            <Text
              style={{
                marginHorizontal: 16,
                color: ThemeColors[appTheme!].textSecondary,
              }}
            >
              or
            </Text>
            <Divider
              style={{
                backgroundColor: ThemeColors[appTheme!].textSecondary,
                width: "40%",
              }}
            />
          </Row>
          <TransparentButton
            text="with Google"
            opacity={0.15}
            icon={
              <Image
                source={require("@/assets/images/google.png")}
                style={styles.googleLogo}
              />
            }
            onPress={onGoogleSignIn}
          />
        </View>
      </BlurView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  title: { flex: 1, justifyContent: "center", alignItems: "center" },
  registerOptions: { flex: 2, width: "100%" },
  gradient: { ...StyleSheet.absoluteFillObject, zIndex: 1 },
  blurContainer: {
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 20,
  },
  themeChange: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 24,
    right: 24,
    zIndex: 3,
  },
  googleLogo: { width: 24, height: 24, marginRight: 8 },
});
