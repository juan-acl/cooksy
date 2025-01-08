import { CardFood } from "@/components/cardFood";
import { CustomImageBackground } from "@/components/imagenBackground";
import { SearchInput } from "@/components/searchInput";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";

const HomeScreen = () => {
  const goToDetail = () => {
    router.push({
      pathname: "/detail",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.header}>
          <View style={styles.subHeader}>
            <Text style={styles.textHeader}>Discovery Best {"\n"} Recipes</Text>
            <ImageBackground
              source={require("@/assets/images/profile.png")}
              style={styles.backgroundImage}
              resizeMode="cover"
            />
          </View>
          <SearchInput styles={styles.textInput} />
        </View>
        <View style={styles.body}>
          <Text style={styles.textBody}>Just For You.</Text>
          <CustomImageBackground
            resizeMode={"cover"}
            source={require("@/assets/images/spaghetti.png")}
            style={styles.customBackgroundImage}
            text={"15 best pasta recipes from \n chef John"}
            textStyles={styles.textImage}
          />
        </View>
        <Text style={styles.textBody}>Trending Recipes</Text>
        <View style={styles.containerCards}>
          <View style={styles.cardWrapper}>
            <CardFood onPress={goToDetail} />
          </View>
          <View style={styles.cardWrapper}>
            <CardFood onPress={goToDetail} />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.subcontainerIcons}>
            <CustomImageBackground
              resizeMode={"fill"}
              source={require("@/assets/images/pizzaIcon.png")}
              style={styles.iconsImages}
            />
            <Text style={styles.subtitle}>Pizza</Text>
          </View>
          <View style={styles.subcontainerIcons}>
            <CustomImageBackground
              resizeMode={"fill"}
              source={require("@/assets/images/ensalada.png")}
              style={styles.iconsImages}
            />
            <Text style={styles.subtitle}>Pizza</Text>
          </View>
          <View style={styles.subcontainerIcons}>
            <CustomImageBackground
              resizeMode={"fill"}
              source={require("@/assets/images/hamburger.png")}
              style={styles.iconsImages}
            />
            <Text style={styles.subtitle}>Pizza</Text>
          </View>
          <View style={styles.subcontainerIcons}>
            <CustomImageBackground
              resizeMode={"fill"}
              source={require("@/assets/images/pasta.png")}
              style={styles.iconsImages}
            />
            <Text style={styles.subtitle}>Pizza</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subcontainerIcons: {},
  subtitle: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
  },
  iconsImages: {
    width: 70,
    height: 70,
    marginTop: 20,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
  },
  containerCards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 10,
  },
  cardWrapper: {
    width: "48%",
    marginBottom: 15,
  },
  textImage: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subcontainer: {
    display: "flex",
    padding: 10,
  },
  customBackgroundImage: {
    height: 200,
    width: "100%",
    borderRadius: 20,
    justifyContent: "flex-end",
    marginHorizontal: 0,
  },
  textBody: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 1,
  },
  textInput: {
    width: "auto",
    height: 60,
  },
  subHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  body: {
    display: "flex",
    // Asegúrate de no tener padding o márgenes en este contenedor
    marginHorizontal: 0,
  },
  textHeader: {
    color: "#25AE87",
    fontSize: 30,
    flexWrap: "wrap",
    fontWeight: "bold",
  },
  backgroundImage: {
    width: 50,
    height: 50,
  },
});

export default HomeScreen;
