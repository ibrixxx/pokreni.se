import { StyleSheet } from "react-native";
import React from "react";
import { Button, ButtonProps } from "react-native-paper";
import { useTheme } from "@/hooks/useTheme";
import { ThemeColors } from "@/constants/Colors";

const PaperButton = ({ ...props }: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <Button
      mode="elevated"
      style={styles.container}
      buttonColor={ThemeColors[theme!].primary}
      textColor={ThemeColors[theme!].text}
      rippleColor={ThemeColors[theme!].success}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default PaperButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 20,
    paddingVertical: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
