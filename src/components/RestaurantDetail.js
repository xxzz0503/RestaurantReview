import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, Feather, FontAwesome5 } from "@expo/vector-icons";
import yelp from "../api/yelp";
import ImageSlider from "./ImageSlider";

const RestaurantDetail = ({ navigation }) => {
  const itemId = navigation.getParam("itemId");
  const [result, setResult] = React.useState(null);
  const [counter, setCounter] = React.useState(0);

  const getDetailFromId = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  React.useEffect(() => {
    getDetailFromId(itemId);
  }, []);

  return result !== null ? (
    <View style={styles.container}>
      <View style={styles.res_detail_box}>
        {/* image flow */}
        <View style={styles.res_img_box}>
          <ImageSlider style={styles.res_img} photos={result.photos} />
          <View style={styles.res_tag_box}>
            <View style={styles.res_rating_box}>
              <Text style={styles.res_rating_content}>
                {result.rating}
                {"  "}
                <FontAwesome
                  style={styles.res_rating_content_icon}
                  name="star"
                />
              </Text>
            </View>
            <View style={styles.res_open_closed_box}>
              {result.hours[0].is_open_now ? (
                <FontAwesome5
                  style={styles.res_open_closed_icon}
                  name="door-open"
                  color="green"
                />
              ) : (
                <FontAwesome5
                  style={styles.res_open_closed_icon}
                  name="door-closed"
                  color="red"
                />
              )}
            </View>
          </View>
        </View>
        {/* information flow */}
        <View style={styles.res_information_box}>
          <View style={styles.res_info_name_box}>
            <Text style={styles.res_info_name_content}>{result.name}</Text>
          </View>
          <View
            style={{
              borderBottomColor: "#111111",
              borderBottomWidth: 1,
              opacity: 0.2,
              marginVertical: 10,
            }}
          />
          <View style={styles.res_info_phone_box}>
            <Text style={styles.res_info_phone_content}>
              <Feather name="phone-call" size={20} color="red" />
              {"  "}
              {result.phone}
            </Text>
          </View>
          <View style={styles.res_info_price_quantity_box}>
            <View style={styles.res_info_price_box}>
              <Text style={styles.res_info_price_title}>Price</Text>
              <Text style={styles.res_info_price_content}>{result.price}</Text>
            </View>
            <View style={styles.res_info_quantity_box}>
              <Text style={styles.res_info_quantity_title}>Quantity</Text>
              <View style={styles.res_info_quantity_counter}>
                <TouchableOpacity onPress={() => setCounter(counter - 1)}>
                  <FontAwesome
                    style={styles.res_info_quantity_counter_minus_btn}
                    name="minus-circle"
                  />
                </TouchableOpacity>
                <Text style={styles.res_info_quantity_counter_content}>
                  {counter}
                </Text>
                <TouchableOpacity onPress={() => setCounter(counter + 1)}>
                  <FontAwesome
                    style={styles.res_info_quantity_counter_plus_btn}
                    name="plus-circle"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.res_cta}>
        <Text style={styles.res_cta_content}>
          <FontAwesome style={styles.res_cta_icon} name="cart-plus" />
          {`   Add to cart`}
        </Text>
      </View>
    </View>
  ) : (
    <Text>Wait a minutes</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#999999",
    height: "100%",
    justifyContent: "center",
  },
  res_detail_box: {
    height: "100%",
    backgroundColor: "#f7f7f7",
  },
  res_img: {
    borderRadius: 10,
  },
  res_tag_box: {
    position: "absolute",
    width: "100%",
    top: 30,
    paddingHorizontal: 20,
  },
  res_rating_box: {
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 10,
  },
  res_rating_content: {
    fontSize: 20,
    fontWeight: "700",
  },
  res_rating_content_icon: {
    color: "#ffc529",
    fontSize: 20,
  },
  res_open_closed_box: {
    position: "absolute",
    backgroundColor: "#ffffff",
    alignSelf: "flex-end",
    right: 20,
    padding: 10,
    borderRadius: 10,
  },
  res_open_closed_icon: {
    fontSize: 20,
  },

  // design restaurant info section
  res_information_box: {
    padding: 10,
    paddingHorizontal: 30,
    zIndex: 1,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    width: "100%",
    bottom: 0,
    top: 290,
  },

  // design restaurant name section
  res_info_name_box: {
    marginTop: 20,
    marginBottom: 10,
  },
  res_info_name_content: {
    fontSize: 25,
    fontWeight: "700",
  },

  // design phone section
  res_info_phone_box: {
    padding: 10,
    backgroundColor: "#F3F2F5",
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  res_info_phone_content: {
    fontSize: 16,
  },

  // design price & quantity section
  res_info_price_quantity_box: {
    marginVertical: 20,
    flexDirection: "row",
  },
  res_info_price_box: {
    flex: 1,
  },
  res_info_price_title: {
    fontSize: 20,
    fontWeight: "600",
    opacity: 0.7,
    marginBottom: 10,
  },
  res_info_price_content: {
    fontSize: 30,
    fontWeight: "700",
    color: "red",
  },
  res_info_quantity_box: {
    flex: 1,
  },
  res_info_quantity_title: {
    alignSelf: "flex-end",
    fontSize: 20,
    fontWeight: "600",
    opacity: 0.7,
    marginBottom: 10,
  },
  res_info_quantity_counter: {
    alignSelf: "flex-end",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 20,
  },
  res_info_quantity_counter_minus_btn: {
    fontSize: 35,
    marginRight: 10,
  },
  res_info_quantity_counter_content: {
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "center",
    textAlign: "center",
    width: 40,
  },
  res_info_quantity_counter_plus_btn: {
    fontSize: 35,
    marginLeft: 10,
    color: "#FE724C",
  },

  // design cta section
  res_cta: {
    backgroundColor: "#FE724C",
    width: "40%",
    padding: 10,
    borderRadius: 10,
    position: "absolute",
    bottom: 20,
    textAlign: "center",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  res_cta_icon: {
    color: "#FFC529",
    fontSize: 24,
  },
  res_cta_content: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default RestaurantDetail;
