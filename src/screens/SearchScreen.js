import React from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ListRestaurant from "../components/ListRestaurant";
import useYelpApi from "../hooks/useYelpApi";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = React.useState("");
  const [makeYelpRequest, searchResults, errorMsg] = useYelpApi();

  const filterResultsByPrice = (price) => {
    // price === "$" || "$$" || "$$$"
    return searchResults.filter((item) => {
      return item.price === price;
    });
  };

  return errorMsg !== null ? (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => makeYelpRequest(term)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListRestaurant
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />

        <ListRestaurant
          results={filterResultsByPrice("$$")}
          title="Bit Pricer"
        />

        <ListRestaurant
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  ) : (
    <Text></Text>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
    paddingLeft: 30,
    paddingTop: 20,
  },
  list: {
    marginTop: 10,
  },
});

export default SearchScreen;
