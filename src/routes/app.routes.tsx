import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { Header } from "../components/Header";
import { Login } from "../screens";
import { Dashboard } from "../screens/Dashboard";
import { HomeRoutes } from "./home.routes";

const { Navigator, Screen } = createStackNavigator();

type ScreenOptionsProps = {
  route: RouteProp<ParamListBase, string>;
};

export const AppRoutes = () => {
  const screenOptions = ({
    route: { name },
  }: ScreenOptionsProps): StackNavigationOptions => ({
    header: () => {
      return <Header screenName={name} />;
    },
    headerShown: false,
  });

  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions}>
        <Screen name="Login" component={Login} />
        <Screen name="HomeRoutes" component={HomeRoutes} />
      </Navigator>
    </NavigationContainer>
  );
};
