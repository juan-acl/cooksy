import { CustomButton } from "@/components/buttons";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function HomeScreen() {
  const goToMenu = () => {
    router.push("/menu");
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("@/assets/images/home.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={[
            "rgba(0, 0, 0, 0)",
            "rgba(0, 0, 0, 0.86)",
            "rgba(0, 0, 0, 1)",
          ]}
          style={styles.gradient}
        />
        <View style={styles.overlay} />
        <View style={styles.footer}>
          <Text style={styles.text}>Cook Like a Chef</Text>
          <Text style={styles.paragraf}>
            De Chef is a user-friendly recipe app designed for those who are new
            to cooking and want to try new recipes at home
          </Text>
          <CustomButton
            title={"Get Started"}
            styleButton={styles.buttonStyle}
            stylesText={styles.textButtonStyle}
            onPress={goToMenu}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
  },
  paragraf: {
    color: "#fff",
    fontSize: 16,
    padding: 20,
    textAlign: "center",
  },
  footer: {
    marginBottom: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "#25AE87",
    padding: 15,
    width: 250,
    borderRadius: 10,
  },
  textButtonStyle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
});
