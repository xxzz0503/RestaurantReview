import React, { useState } from "react";
import { Text, View, StyleSheet, Header } from "react-native";
import SearchBar from "../components/SearchBar";
import PreviewRestaurant from "../components/PreviewRestaurant";
import Preview2 from "../components/Preview2";
import yelp from "../api/yelp";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

const SearchScreen = () => {
  const [term, setTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  //   const makeApiRequest = () => {
  //     yelp.route("/search").get((req, res) => {});
  //   };

  const makeApiRequest = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 5,
          // if key and value is identical so can write like this. here key is term and value is term also
          term,
          location: "london",
        },
      });
      console.log(response.data.businesses);
      setSearchResults(response.data.businesses);
    } catch (e) {
      console.log(setErrorMsg("Something went wrong. return later!!!!"));
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => makeApiRequest()}
      />
      {errorMsg 
        ? <Text>{errorMsg}</Text>
        : <Text>We have found: {searchResults.length} results</Text>
      }
      <PreviewRestaurant />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#999999",
    height: "100%",
  },
});

export default SearchScreen;
