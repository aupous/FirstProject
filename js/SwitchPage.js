import { StackNavigator } from "react-navigation";
import Content from "./Content";
import Register from "./Register";
import Home from "./Home";
export const Navigation = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null
    }
  },
  Content: {
    screen: Content,
    navigationOptions: {
      header: null
    }
  }
});
//export default Navigation;
