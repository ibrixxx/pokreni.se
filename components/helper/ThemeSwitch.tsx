import { StyleSheet, ViewProps } from "react-native";
import React from "react";
import { Row } from "dripsy";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Switch } from "react-native-paper";
import { Colors } from "@/constants/Colors";
import { useTheme } from "@/hooks/useTheme";

const ThemeSwitch = ({ ...props }: ViewProps) => {
  const { isDarkTheme, setTheme } = useTheme();

  return (
    <Row {...props}>
      {isDarkTheme ? (
        <MaterialIcons name="dark-mode" size={24} color={Colors.gray[10]} />
      ) : (
        <MaterialIcons name="light-mode" size={24} color={Colors.yellow[15]} />
      )}
      <Switch
        style={styles.switch}
        color={Colors.yellow[4]}
        value={!isDarkTheme}
        onChange={() => setTheme(isDarkTheme ? "light" : "dark")}
      />
    </Row>
  );
};

export default ThemeSwitch;

const styles = StyleSheet.create({
  switch: {
    marginHorizontal: 4,
  },
});
