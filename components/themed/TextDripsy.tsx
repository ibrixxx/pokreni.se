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
      sx={(theme) => ({ color: theme.colors.$text })}
      style={style}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default TextDripsy;
