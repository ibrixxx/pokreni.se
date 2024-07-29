import { Sx, SafeAreaView } from "dripsy";
import { type ViewProps } from "react-native";
import React from "react";

type DripsyThemedViewProps = ViewProps & Sx;

const SafeAreaViewDripsy = ({
  style,
  children,
  ...props
}: DripsyThemedViewProps) => {
  return (
    <SafeAreaView
      style={style}
      sx={(theme) => ({
        backgroundColor: theme.colors.$background,
      })}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaViewDripsy;
