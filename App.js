import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import RestaurantDetail from "./src/components/RestaurantDetail";
import ImageSlider from "./src/components/ImageSlider";


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: RestaurantDetail,
    Slider: ImageSlider,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      header: null,
      // headerStyle: {
      //   borderBottomWidth: "none",
      //   shadowColor: 'transparent',
      // },
      // headerTintColor: "#111111",
      // headerTitleStyle: {
      //   fontSize: 25,
      //   fontWeight: "bold"
      // },
    },
    options: ({ route }) => ({
      title: route.param.title,
    }),
  }
);

export default createAppContainer(navigator);
