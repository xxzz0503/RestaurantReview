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
  const [ON_FOCUS_FLAG, setOnFocus] = React.useState(0);

  React.useEffect(() => {
    setOnPress(0);
    setOnFocus(0);
  }, []);

  const searchDisplay = (style) => {
    return (
      <View style={style.container}>
        <TouchableOpacity
          onPress={() => {
            setOnPress(1);
            setOnFocus(1);
          }}
        >
          <Feather style={style.search_icon} name="search" />
        </TouchableOpacity>
        <TextInput
          style={style.search_text_input}
          placeholder="Search..."
          autoFocus={ON_FOCUS_FLAG === 1? true : false}
          value={term}
          onChangeText={(inputText) => onTermChange(inputText)}
          onEndEditing={async () => {
            await onTermSubmit();
            setOnPress(0);
            setOnFocus(0);
          }}
        />
      </View>
    );
  };
  return ON_PRESS_FLAG === 0
    ? searchDisplay(styles)
    : searchDisplay(onPress_styles);
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
    display: "none",
  },
});

const onPress_styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginVertical: 10,
    borderRadius: 5,
    marginRight: 30,
    flexDirection: "row",
    justifyContent: "flex-start",
    shadowColor: "#111111",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  search_icon: {
    fontSize: 60,
    color: "#4695FF",
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
