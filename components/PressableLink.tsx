import { PressableProps, ViewStyle } from "react-native";
import React from "react";
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
export default function PressableLink(props: Props) {
  return (
    <Link asChild {...props.linkProps}>
      <StyledPressable {...props?.pressableProps}>
        {props.children}
      </StyledPressable>
    </Link>
  );
}
