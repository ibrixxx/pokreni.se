import { StyleSheet } from "react-native";
import React from "react";
import { Row, useDripsyTheme } from "dripsy";
import TextDripsy from "@/components/themed/TextDripsy";
import { ThemeColors } from "@/constants/Colors";

import Entypo from "@expo/vector-icons/Entypo";
import { useTheme } from "@/hooks/useTheme";

const DevTag = () => {
  const { theme } = useDripsyTheme();
  const { theme: appTheme } = useTheme();

  return (
    <Row style={styles.container}>
      <Entypo name="code" size={14} color={ThemeColors[appTheme!].text} />
      <TextDripsy
        style={{
          marginLeft: theme.space.$1,
          fontSize: theme.fontSizes.$1,
          fontFamily: "KanitRegular",
        }}
      >
        nafakash
      </TextDripsy>
    </Row>
  );
};

export default DevTag;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
