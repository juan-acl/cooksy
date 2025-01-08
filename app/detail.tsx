import { BlurInfo } from "@/components/blurInfo";
import { CustomImageBackground } from "@/components/imagenBackground";
import { Ingredients } from "@/components/ingredients";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <CustomImageBackground
          resizeMode={"cover"}
          source={require("@/assets/images/fondoPizza.png")}
          style={styles.customBackgroundImage}
        >
          <BlurInfo text={"Spaghetti Carbonara"} />
        </CustomImageBackground>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Tortilla Pizza Recipe</Text>
        <Text style={styles.infoText}>
          This tortilla pizza is extremely easy to make. It is light enough to
          be a snack, serves well as an appetizer, or is so good that it can be
          devoured alone! You can use any sort of topping variation.
        </Text>
        <Text style={styles.infoTitle}>Ingredients</Text>
        <Ingredients />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: -110,
    backgroundColor: "#cccccc",
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  customBackgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  textImage: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    padding: 5,
    marginTop: 5,
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
});
