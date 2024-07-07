import { Pressable, PressableProps, ViewStyle } from "react-native";
import React from "react";

interface StyledPressableProps extends PressableProps {
  style?: ViewStyle;
}

export default function StyledPressable(props: StyledPressableProps) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [props?.style, pressed && { opacity: 0.5 }]}
    >
      {props.children}
    </Pressable>
  );
}
