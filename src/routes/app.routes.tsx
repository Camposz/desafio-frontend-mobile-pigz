import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { Login } from "../screens";

const Stack = createStackNavigator();

type ScreenOptionsProps = {
  route: RouteProp<ParamListBase, string>;
};

export const AppRoutes = () => {
  const screenOptions = ({
    route: { name },
  }: ScreenOptionsProps): StackNavigationOptions => ({
    // header: () => {
    //   return <Header screenName={name} />;
    // },
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
