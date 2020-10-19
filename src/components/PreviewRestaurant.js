import React from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";

const PreviewRestaurant = () => {
  return (
    <View>
    <TouchableOpacity 
    style={styles.container}
    onPress={() => {
      console.log(1);
    }}>
      <View style={styles.image_box}>
        <Image
          style={styles.image}
          source={require("../../assets/noodle.jpg")}
        />
      </View>
      <View style={styles.res_description}>
        <Text style={styles.res_title}>Restaurant Name</Text>
        <Text style={styles.res_price}>Price</Text>
        <Text style={styles.res_rating}>Rating </Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // main container style
  container: {
    width: "70%",
    height: 250,
    marginStart: 20,
    shadowColor: "#111111",
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  // image display
  image_box: {
    flex: 1,
    padding: 10,
    paddingBottom: 0,
    shadowColor: "#111111",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "center",
    borderRadius: 10,
  },

  // text display
  res_description: {
    position: "absolute",
    paddingTop: 120,
    paddingStart: 10,
    paddingBottom: 10,
    width: "95%",
    bottom: -5,
    zIndex: -1,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "#ffffff",
  },
  res_title: {
    fontSize: 25,
    fontWeight: "700",
    marginLeft: 10,
  },
  res_price: {
    opacity: 0.4,
    marginLeft: 10,
  },
  res_rating: {
    opacity: 0.4,
    marginLeft: 10,
  },
});

export default PreviewRestaurant;
