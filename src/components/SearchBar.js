import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather style={styles.search_icon} name="search" />
      <TextInput
        style={styles.search_text_input}
        placeholder="Search..."
        value={term}
        onChangeText = {(inputText) => onTermChange(inputText)}
        onEndEditing = {() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginVertical: 10,
    borderRadius: 5,
    marginRight: 30,
    flexDirection: "row",
    shadowColor: "#111111",
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  search_icon: {
    fontSize: 40,
    color: "#111111",
    marginHorizontal: 10,
    alignSelf: "center",
  },
  search_text_input: {
    flex: 1,
    color: "#111111",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default SearchBar;
