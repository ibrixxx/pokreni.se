import { StyleSheet } from "react-native";
import React from "react";
import { TextInput, TextInputProps } from "react-native-paper";
import { useTheme } from "@/hooks/useTheme";
import { ThemeColors } from "@/constants/Colors";

const PaperTextInput = ({ ...props }: TextInputProps) => {
  const { theme } = useTheme();
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="username"
      placeholderTextColor={ThemeColors[theme!].textSecondary}
      value={text}
      theme={{
        colors: {
          onSurfaceVariant: ThemeColors[theme!].textSecondary,
        },
      }}
      placeholder="username10"
      activeUnderlineColor={ThemeColors[theme!].text}
      outlineColor={ThemeColors[theme!].textInputInactiveOutline}
      activeOutlineColor={ThemeColors[theme!].textInputActiveOutline}
      textColor={ThemeColors[theme!].text}
      selectionColor={ThemeColors[theme!].primary}
      mode="outlined"
      style={[
        styles.container,
        { backgroundColor: ThemeColors[theme!].textInputBackground },
      ]}
      outlineStyle={styles.outline}
      onChangeText={(text) => setText(text)}
      {...props}
    />
  );
};

export default PaperTextInput;

const styles = StyleSheet.create({
  container: { width: "100%" },
  outline: { borderRadius: 20 },
});
