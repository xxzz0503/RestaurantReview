import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import PreviewRestaurant from "./PreviewRestaurant";

const ListRestaurant = ({ title, results }) => {
  return !results.length ? null : (
    <View style={styles.container}>
      <View style={styles.lst_title_box}>
        <Text style={styles.lst_title_content}>{title}{"  "}<Text style={styles.lst_title_amount}>{results.length}</Text></Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return (
            <PreviewRestaurant
              res_price={item.price}
              res_rating={item.rating}
              res_review={item.review_count}
              res_name={item.name}
              res_image={item.image_url}
              res_id={item.id}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  lst_box: {
    height: 300,
  },
  lst_title_box: {
    marginBottom: 10,
  },
  lst_title_content: {
    color: "#14274e",
    fontSize: 30,
    fontWeight: "900",
  },
  lst_title_amount: {
    color: "red",
    fontSize: 20,
    fontWeight: "700"
  }
});

export default ListRestaurant;
