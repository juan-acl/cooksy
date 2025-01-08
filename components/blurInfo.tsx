import { StyleSheet, Text, View } from "react-native";

interface PropsBlurInfo {
  text: string;
}

export const BlurInfo = ({ text }: PropsBlurInfo) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.subContainer}>
        <View style={styles.blurEffect}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    margin: 10,
  },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 20,
    width: "100%",
    borderRadius: 20,
    top: "50%",
    position: "absolute",
  },
  subContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 10,
    marginTop: 10,
    borderRadius: 20,
  },
  blurEffect: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    flex: 1,
    borderRadius: 20,
  },
});
