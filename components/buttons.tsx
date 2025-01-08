import { Pressable, Text } from "react-native";

interface CustomButtonProps {
  onPress?: () => void;
  title: string;
  styleButton?: any;
  stylesText?: any;
}

export const CustomButton = ({
  title,
  onPress,
  styleButton,
  stylesText,
}: CustomButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styleButton}>
      <Text style={stylesText}>{title}</Text>
    </Pressable>
  );
};
