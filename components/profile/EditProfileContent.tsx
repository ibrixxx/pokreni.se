import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Image, useDripsyTheme, View } from "dripsy";
import { ThemeColors } from "@/constants/Colors";
import { useTheme } from "@/hooks/useTheme";
import ViewDripsy from "../themed/ViewDripsy";
import PaperTextInput from "../themed/PaperTextInput";
import TextDripsy from "../themed/TextDripsy";
import PaperButton from "../buttons/PaperButton";

const EditProfileContent = () => {
  const { theme } = useDripsyTheme();
  const { theme: appTheme } = useTheme();

  return (
    <ViewDripsy variant="layout.centerContainer" style={styles.container}>
      <TouchableOpacity
        style={theme.layout.centerContainer}
        onPress={() => console.debug("im ch")}
      >
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
        <TextDripsy variant="text.kanitRegular">Change image</TextDripsy>
      </TouchableOpacity>

      <View sx={{ my: "$4", width: "100%" }}>
        <PaperTextInput label={"Change the username"} />
      </View>

      <PaperButton>
        <TextDripsy variant="text.buttonText">save</TextDripsy>
      </PaperButton>
    </ViewDripsy>
  );
};

export default EditProfileContent;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 20,
    justifyContent: "space-between",
  },
});
