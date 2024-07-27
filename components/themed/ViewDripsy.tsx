import { View, Sx } from "dripsy";
import { type ViewProps } from "react-native";
import React from "react";

type DripsyThemedViewProps = ViewProps & Sx;

const ViewDripsy = ({ style, children, ...props }: DripsyThemedViewProps) => {
  return (
    <View
      style={style}
      sx={(theme) => ({
        backgroundColor: theme.colors.$background,
      })}
      {...props}
    >
      {children}
    </View>
  );
};

export default ViewDripsy;
