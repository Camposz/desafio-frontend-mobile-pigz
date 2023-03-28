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
}

export const Header = ({ screenName }: HeaderProps) => {
  return (
    <HeaderBackground>
      <HeaderContainer>
        <GoBackButton>
          <GoBackButtonIcon size={32} />
        </GoBackButton>
        <HeaderTitle>{screenName}</HeaderTitle>
      </HeaderContainer>
    </HeaderBackground>
  );
};
