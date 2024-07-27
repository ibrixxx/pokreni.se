import { StyleProp, TextStyle } from "react-native";
import React, { ReactNode } from "react";
import { Text, Sx } from "dripsy";

interface DripsyThemedTextProps extends Sx {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

const TextDripsy = ({ style, children, ...rest }: DripsyThemedTextProps) => {
  return (
    //@ts-ignore
    <Text
      style={style}
      sx={(theme) => ({ color: theme.colors.$text })}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default TextDripsy;
