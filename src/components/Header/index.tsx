import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import { Pressable } from "react-native";
import {
  GoBackButton,
  GoBackButtonIcon,
  HeaderBackground,
  HeaderContainer,
  HeaderTitle,
} from "./style";

interface HeaderProps {
  screenName: string;
  navigation: BottomTabNavigationProp<ParamListBase, string, undefined>;
}

export const Header = ({ screenName, navigation: { goBack } }: HeaderProps) => {
  return (
    <HeaderBackground>
      <HeaderContainer>
        <GoBackButton onPress={() => goBack()}>
          <GoBackButtonIcon size={32} />
        </GoBackButton>
        <HeaderTitle>{screenName}</HeaderTitle>
      </HeaderContainer>
    </HeaderBackground>
  );
};
