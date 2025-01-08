import { StyleSheet, TextInput } from "react-native";

interface PropsTextInput {
  styles?: any;
}

export const SearchInput = ({ styles: stylesPrps }: PropsTextInput) => {
  return (
    <TextInput
      placeholder="Search here..."
      style={[styles.input, stylesPrps]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 30,
    borderRadius: 15,
    backgroundColor: "#eee",
    borderColor: "#ddd",
  },
});
