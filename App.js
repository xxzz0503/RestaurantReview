import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import RestaurantDetail from "./src/components/RestaurantDetail"


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: RestaurantDetail,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#999999",
        borderBottomWidth: "none",
        shadowColor: 'transparent',
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontSize: 25,
        fontWeight: "bold"
      },
    },
    options: ({ route }) => ({
      title: route.param.title,
    }),
  }
);

export default createAppContainer(navigator);
