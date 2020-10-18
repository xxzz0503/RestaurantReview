import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Feather style={styles.search_icon} name="search" />
      <TextInput 
      style={styles.search_text_input} 
      placeholder="Search..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#111111",
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
  },
  search_icon: {
    fontSize: 40,
    color: "#111111",
    marginHorizontal: 10,
    alignSelf: "center"
  },
  search_text_input: {
    flex: 1,
    color: "#111111",
    fontSize: 15,
    fontWeight: "600"
  },
});

export default SearchBar;
