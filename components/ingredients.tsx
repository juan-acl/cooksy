import { FlatList, StyleSheet, Text, View } from "react-native";
import { CustomImageBackground } from "./imagenBackground";

interface IngredientItem {
  item: {
    id: string;
    image: any;
    text: string;
    quantity: string;
    customStyle?: any;
  };
}

export const Ingredients = () => {
  const data = [
    {
      id: "1",
      image: require("@/assets/images/tortilla.png"),
      text: "Soft flour tortilla",
      quantity: "1",
    },
    {
      id: "2",
      image: require("@/assets/images/aceite.png"),
      text: "Soft flour tortilla",
      quantity: "1",
    },
    {
      id: "3",
      image: require("@/assets/images/harina.png"),
      text: "Soft flour tortilla",
      quantity: "1",
    },
    {
      id: "4",
      image: require("@/assets/images/sal.png"),
      text: "Soft flour tortilla",
      quantity: "1",
      customStyle: styles.customBackgroundImageSalt,
    },
  ];

  const renderItem = ({ item }: IngredientItem) => {
    return (
      <View style={styles.subContainer}>
        <CustomImageBackground
          resizeMode={"contain"}
          source={item.image}
          style={item.customStyle || styles.customBackgroundImage}
        />
        <Text style={styles.text}>{item.text}</Text>
        <Text>{item.quantity}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
  },
  subContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    padding: 10,
  },
  customBackgroundImageSalt: {
    height: 43,
    width: 65,
    borderRadius: 20,
    justifyContent: "flex-end",
    marginHorizontal: 0,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  customBackgroundImage: {
    height: 70,
    width: 70,
    borderRadius: 20,
    justifyContent: "flex-end",
    marginHorizontal: 0,
  },
});
