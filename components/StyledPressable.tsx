import { Pressable, PressableProps, View, ViewStyle } from "react-native";
import React, { forwardRef } from "react";

interface StyledPressableProps extends PressableProps {
  style?: ViewStyle;
}
const StyledPressable = forwardRef((props: StyledPressableProps, ref: React.Ref<View>) => {
  return (
    <Pressable
      {...props}
      ref={ref}
      style={({ pressed }) => [props?.style, pressed && { opacity: 0.5 }]}
    >
      {props.children}
    </Pressable>
  );
});

export default StyledPressable;
