import React from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ListRestaurant from "../components/ListRestaurant";
import useYelpApi from "../hooks/useYelpApi";

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = React.useState("");
  const [makeYelpRequest, searchResults, errorMsg] = useYelpApi();

  const filterResultsByPrice = (price) => {
    // price === "$" || "$$" || "$$$"
    return searchResults.filter((item) => {
      return item.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => makeYelpRequest(term)}
      />
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <Text>We have found: {searchResults.length} results</Text>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        {filterResultsByPrice("$").length === 0 ? null : (
          <ListRestaurant
            results={filterResultsByPrice("$")}
            title="Cost Effective"
          />
        )}

        {filterResultsByPrice("$$").length === 0 ? null : (
          <ListRestaurant
            results={filterResultsByPrice("$$")}
            title="Bit Pricer"
          />
        )}

        {filterResultsByPrice("$$$").length === 0 ? null : (
          <ListRestaurant
            results={filterResultsByPrice("$$$")}
            title="Big Spender"
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#999999",
    height: "100%",
    paddingLeft: 30,
  },
  list: {
    marginTop: 10,
  },
});

export default SearchScreen;
