import { ReactNode } from "react";
import { ImageBackground, Text } from "react-native";

interface PropsImageBackground {
  source: any;
  style: any;
  resizeMode: any;
  text?: string;
  textStyles?: any;
  children?: ReactNode;
}

export const CustomImageBackground = ({
  resizeMode,
  source,
  style,
  text,
  textStyles,
  children,
}: PropsImageBackground) => {
  return (
    <ImageBackground source={source} style={style} resizeMode={resizeMode}>
      <Text style={textStyles}>{text}</Text>
      {children}
    </ImageBackground>
  );
};
