import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "@/constants/Colors";
import { Row, useDripsyTheme } from "dripsy";
import TextDripsy from "@/components/themed/TextDripsy";
import { useTheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";

interface TransparentButtonProps extends TouchableOpacityProps {
  selected?: boolean;
  text: string;
  icon?: ReactNode;
  gradient?: boolean;
  opacity?: number;
}

const TransparentButton = ({
  selected,
  text,
  icon,
  gradient,
  opacity = 0.5,
  ...props
}: TransparentButtonProps) => {
  const { theme } = useDripsyTheme();
  const { theme: appTheme } = useTheme();
  const isDarkTheme = appTheme === "dark";

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.style, theme.borderStyles.mainRadius]}
    >
      {gradient ? (
        <LinearGradient
          colors={
            isDarkTheme
              ? theme.linearGradients.proButtonDark
              : theme.linearGradients.proButton
          }
          style={styles.gradientMask}
        />
      ) : (
        <View
          style={[
            selected ? styles.maskSelected : styles.mask,
            { opacity: selected ? opacity + 0.2 : opacity },
          ]}
        />
      )}
      <Row style={styles.buttonText}>
        {icon}
        <TextDripsy
          variant="text.kanitRegular"
          style={{
            marginLeft: theme.space.$1,
            fontSize: theme.fontSizes.$3,
          }}
        >
          {text}
        </TextDripsy>
      </Row>
    </TouchableOpacity>
  );
};

export default TransparentButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  mask: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    backgroundColor: Colors.gray[5],
  },
  maskSelected: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    backgroundColor: Colors.gold[10],
  },
  buttonText: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  gradientMask: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    opacity: 0.5,
  },
});
