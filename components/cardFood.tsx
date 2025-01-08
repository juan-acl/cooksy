import { Pressable, StyleSheet, View } from "react-native";
import { CustomImageBackground } from "./imagenBackground";
import { BlurInfo } from "./blurInfo";

interface PropsCardFood {
  onPress?: () => void;
}

export const CardFood = ({ onPress }: PropsCardFood) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <CustomImageBackground
          resizeMode={"cover"}
          source={require("@/assets/images/pizza.png")}
          style={styles.customBackgroundImage}
          textStyles={styles.textImage}
        />
        <BlurInfo text={"Spaghetti Carbonara"} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  customBackgroundImage: {
    height: 255,
    width: "100%",
    borderRadius: 30,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  textImage: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
