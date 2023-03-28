import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { BottomTab } from "../components/BottomTab";
import { Header } from "../components/Header";
import { Dashboard } from "../screens/Dashboard";
import theme from "../theme";

const { Navigator, Screen } = createBottomTabNavigator();

type ScreenOptionsProps = {
  route: RouteProp<ParamListBase, string>;
};

const screenOptions = ({
  route: { name },
}: ScreenOptionsProps): BottomTabNavigationOptions => ({
  tabBarActiveTintColor: theme.colors.primary_500,
  header: ({ navigation }) => {
    return <Header screenName={name} navigation={navigation} />;
  },
});

const TabBar = (props: BottomTabBarProps) => {
  return <BottomTab {...props} />;
};

export const HomeRoutes = () => {
  return (
    <Navigator
      screenOptions={screenOptions}
      tabBar={TabBar}
      initialRouteName="Visão Geral"
    >
      <Screen name="Relatórios" component={Dashboard} />
      <Screen name="Visão Geral" component={Dashboard} />
      <Screen name="Perfil" component={Dashboard} />
    </Navigator>
  );
};
