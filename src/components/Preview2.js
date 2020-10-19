import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Preview2 = () => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.price_box}>
          <Text style={styles.res_price}>Price</Text>
        </View>
        <View style={styles.image_box}>
          <Image
            style={styles.image}
            source={require("../../assets/noodle.jpg")}
          />
        </View>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,1)"]}
          style={styles.res_description}
        >
          <Text style={styles.res_name}>Restaurant Name</Text>
          <View style={styles.res_rating_box}>
            <Text style={styles.res_rating}>Rating</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 200,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  price_box: {
    position: "absolute",
    zIndex: 1,
    marginLeft: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#111111",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 10,
    justifyContent:"center"
  },
  res_price: {
      fontSize: 20,
      fontWeight: "bold"
  },
  image_box: {},
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
    borderRadius: 10,
  },
  res_description: {
    position: "absolute",
    bottom: 0,
    height: "50%",
    width: "100%",
    borderRadius: 10,
  },
  res_name: {
    flex: 2,
    fontSize: 30,
    fontWeight: "900",
    color: "#ffffff",
    marginLeft: 20,
  },
  res_rating_box: {
    flex: 1,
    backgroundColor: "#4d4d4d",
    alignSelf: "flex-start",
    marginLeft: 20,
    padding: 5,
    borderRadius: 20,
    marginBottom: 10,
    width: "25%",
    alignContent: "center",
    justifyContent: "center"
  },
  res_rating: {
    color: "#ffffff",
    fontSize: 16,
    marginLeft: 5
  },
});

export default Preview2;
