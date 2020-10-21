import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const [ON_PRESS_FLAG, setOnPress] = React.useState(0);

  React.useEffect(() => {
    setOnPress(0);
  }, []);

  return ON_PRESS_FLAG === 0 ? (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setOnPress(1)}>
        <Feather style={styles.search_icon} name="search" />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={onPress_styles.container}>
      <TouchableOpacity onPress={() => setOnPress(1)}>
        <Feather style={onPress_styles.search_icon} name="search" />
      </TouchableOpacity>
      <TextInput
        style={onPress_styles.search_text_input}
        autoFocus={true}
        placeholder="Search..."
        value={term}
        onChangeText={(inputText) => onTermChange(inputText)}
        onEndEditing={async () => {
          await onTermSubmit();
          setOnPress(0);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginVertical: 20,
    borderRadius: 5,
    width: "20%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  search_icon: {
    fontSize: 40,
    color: "#111111",
    marginHorizontal: 10,
  },
  search_text_input: {
    flex: 1,
    color: "#111111",
    fontSize: 15,
    fontWeight: "600",
  },
});

const onPress_styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginVertical: 20,
    borderRadius: 5,
    marginRight: 30,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  search_icon: {
    fontSize: 60,
    color: "#111111",
    marginHorizontal: 10,
  },
  search_text_input: {
    flex: 1,
    color: "#111111",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default SearchBar;
