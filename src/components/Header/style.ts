import { ArrowLeft } from "phosphor-react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import theme from "../../theme";
import { Text } from "../styled";

export const HeaderBackground = styled(SafeAreaView).attrs({
  edges: ["left", "top", "right"],
})`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const GoBackButtonIcon = styled(ArrowLeft).attrs({
  size: RFPercentage(3.1),
  weight: "bold",
  color: theme.colors.primary_500,
})``;

export const GoBackButton = styled.Pressable`
  position: absolute;
  left: ${RFPercentage(2)}px;
`;

export const HeaderTitle = styled(Text).attrs({
  weight: "medium",
})`
  font-size: ${RFPercentage(2.3)}px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${RFPercentage(2)}px;
`;
