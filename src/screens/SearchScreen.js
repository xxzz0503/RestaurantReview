import React from "react";
import {Text, View, StyleSheet, Header} from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () =>{
    return (
        <View style= {styles.container}>
          <SearchBar/>
            <Text>Search Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EBECF1",
        height: "100%"
    }
});

export default SearchScreen;
