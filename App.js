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
        backgroundColor: "#EBECF1",
        borderBottomWidth: "none",
        shadowColor: 'transparent',
      },
      headerTintColor: "#111111",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold"
      },
    },
    options: ({ route }) => ({
      title: route.param.title,
    }),
  }
);

export default createAppContainer(navigator);
