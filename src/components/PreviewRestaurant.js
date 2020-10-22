import React from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const PreviewRestaurant = ({
  res_id,
  res_name,
  res_price,
  res_rating,
  res_image,
  res_review,
  navigation,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Detail", {
            itemId: res_id,
          });
      }}
    >
      <View style={styles.res_price_box}>
        <Text style={styles.res_price_content}>{res_price}</Text>
      </View>
      <View style={styles.image_box}>
        <Image style={styles.res_img} source={{ uri: res_image }} />
      </View>
      <View style={styles.res_description}>
        <Text style={styles.res_title}>{res_name}</Text>
        <View style={styles.res_tag_box}>
          <View style={styles.res_rating_box}>
            <Text style={styles.res_rating_content}>
              <FontAwesome style={styles.res_rating_icon} name="star" />
              {res_rating}
            </Text>
          </View>
          <View style={styles.res_review_box}>
            <Text style={styles.rex_review_content}><FontAwesome name="pencil-square-o" size={16}/> {`  ${res_review}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // main container
  container: {
    marginRight: 30,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    shadowColor: "#14274e",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    marginBottom: 30,
  },
  res_price_box: {
    position: "absolute",
    zIndex: 2,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    height: 30,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  res_price_content: {
    fontSize: 20,
    fontWeight: "600",
    color: "red",
  },
  // show image
  image_box: {
    height: 150,
    width: 200
  },
  res_img: {
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  // show description
  res_description: {
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingRight: 10,
    paddingTop: 5,
    width:200,
    flex: 1,
  },
  res_title: {
    flex: 4,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  res_tag_box: {
    flex: 1,
    flexDirection: "row",
  },
  res_rating_box: {
    backgroundColor: "#EBECF1",
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 5,
    
  },
  res_rating_content: {
    fontSize: 16,
    fontWeight: "bold",
  },
  res_rating_icon: {
    color: "#ffff00",
    fontSize: 16,
    shadowColor: "#111111",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  res_review_box: {
    position: "absolute",
    backgroundColor: "#EBECF1",
    borderRadius: 10,
    paddingHorizontal: 5,
    right: 0
  },
  rex_review_content: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default withNavigation(PreviewRestaurant);
