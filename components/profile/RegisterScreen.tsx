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

// userInfo res object:
// {"idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjljNDA5Zjc3YTEwNmZiNjdlZTFhODVkMTY4ZmQyY2ZiN2MwYjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDI5MDMyMTI0MzM3LTI1M3N0bTJnYmRpYWFraWQwazI2dHBjaHFkMzQ2YmtuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAyOTAzMjEyNDMzNy0yNTNzdG0yZ2JkaWFha2lkMGsyNnRwY2hxZDM0NmJrbi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMTk2OTIxNDgxNzMzMDI3MTc2MSIsImVtYWlsIjoiaWJyMzN0ZXN0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoickdFeFdVX180NXdHWFg1NDVtbHBJZyIsIm5vbmNlIjoidGVlX1pDVWY5dzZvb09WYXloT2VHU25CaHhjbGxISVZ1NWFlQ2ZyWHZOMCIsIm5hbWUiOiJ0ZXN0IHRlc3QiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS0dEZ1ZfeFJUTVUyX3htdVBsVWRLM1F2MDBEOU9NVk91VHc4cllEdF9wV3RhZVJRPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6InRlc3QiLCJmYW1pbHlfbmFtZSI6InRlc3QiLCJpYXQiOjE3MjMwMzEyOTIsImV4cCI6MTcyMzAzNDg5Mn0.KXhIvKNKDcrLn2QrtqCdy_ib4J5p7QOdoMqO9mkH0oCuP1QjsR3oyps7q6aFgGyTZ-ZCxocBl5wv78h4Jj9K2_O1P-puc2YzSC625dbjnusesCwhqqaLzKySwi0Gz6F36CPYhbbY8OLikkguMhJvbY6OKr-zGc7ITwWkiSQdTBPbD06tWh3rzg0BjWlu-ybx_-BnoiwTTTEJsIkWfal2wfYOxuGPcyN3puh6iCam4NrtcIFg5bk3KXHY0SQrfe2e0YybVNHMqNFeeoAiPP_kAbQOcXyJg5vOr4uv0_S9Rk-ptu4ZPhWBuTY1ofgMEZ5z3dd8Gs20OLtVUCx8wRkCJA", "scopes": ["openid", "https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"], "serverAuthCode": null, "user": {"email": "ibr33test@gmail.com", "familyName": "test", "givenName": "test", "id": "111969214817330271761", "name": "test test", "photo": "https://lh3.googleusercontent.com/a/ACg8ocKGDgV_xRTMU2_xmuPlUdK3Qv00D9OMVOuTw8rYDt_pWtaeRQ=s120"}}
