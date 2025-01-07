import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/home.jpg")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <Text style={styles.text}>Bienvenido</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    zIndex: 1,
  },
});
