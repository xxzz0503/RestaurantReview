import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { SliderBox } from "react-native-image-slider-box";

const ImageSlider = ({ photos }) => {
  return (
    <View style={styles.container}>
      <SliderBox
        images={photos}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        circleLoop
        resizeMethod={"resize"}
        resizeMode={"cover"}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: "rgba(128, 128, 128, 0.92)",
        }}
        paginationBoxStyle={styles.res_image_pagination}
        ImageComponentStyle={styles.res_image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  res_image: {
    borderRadius: 10,
    width: "89%",
    alignSelf: "flex-start",
  },
  res_image_pagination:{
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10,
  }
});

export default withNavigation(ImageSlider);
