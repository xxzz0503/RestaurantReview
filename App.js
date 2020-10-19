import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
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
