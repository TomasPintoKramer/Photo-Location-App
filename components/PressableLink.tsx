import { PressableProps, View, ViewStyle } from "react-native";
import React, { forwardRef } from "react";
import { Link } from "expo-router";
import { LinkProps } from "expo-router/build/link/Link";
import StyledPressable from "./StyledPressable";

type Props = {
  children: React.ReactNode;
  linkProps: LinkProps;
  pressableProps?: StyledPressableProps;
};

interface StyledPressableProps extends PressableProps {
  style?: ViewStyle;
}

const PressableLink =  forwardRef((props: Props, ref: React.Ref<View>) =>{
  return (
    <Link asChild {...props.linkProps}>
      <StyledPressable {...props?.pressableProps} ref={ref}>
        {props.children}
      </StyledPressable>
    </Link>
  );
})

export default PressableLink;