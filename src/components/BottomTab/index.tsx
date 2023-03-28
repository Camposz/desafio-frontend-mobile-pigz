import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Bug, HouseLine, Scroll, User } from "phosphor-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import theme from "../../theme";
import {
  BottomTabButtomLabel,
  BottomTabButton,
  BottomTabContainer,
} from "./style";

interface ChangeIcon {
  icon: string;
  isFocused: boolean;
}

const ChangeIcon = ({ icon, isFocused }: ChangeIcon) => {
  const size = 32;
  const weight = "regular";

  if (icon == "Visão Geral") {
    return (
      <HouseLine
        size={size}
        weight={weight}
        color={isFocused ? theme.colors.primary_500 : theme.colors.gray_200}
      />
    );
  }

  if (icon == "Relatórios") {
    return (
      <Scroll
        size={size}
        weight={weight}
        color={isFocused ? theme.colors.primary_500 : theme.colors.gray_200}
      />
    );
  }
  if (icon == "Perfil") {
    return (
      <User
        size={size}
        weight={weight}
        color={isFocused ? theme.colors.primary_500 : theme.colors.gray_200}
      />
    );
  }

  return <Bug size={size} weight={weight} />;
};

export const BottomTab = ({
  state: { index: focusedIndex, routes },
  navigation,
}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <BottomTabContainer>
      {routes.map((route, index) => {
        const isFocused = focusedIndex === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <BottomTabButton key={index} insets={insets} onPress={onPress}>
            <ChangeIcon icon={route.name} isFocused={isFocused} />
            <BottomTabButtomLabel isFocused={isFocused}>
              {route.name}
            </BottomTabButtomLabel>
          </BottomTabButton>
        );
      })}
    </BottomTabContainer>
  );
};
