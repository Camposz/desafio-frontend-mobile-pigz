import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { EdgeInsets, SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Text } from "../styled";

interface BottomTabContainerProps {
  insets: EdgeInsets;
}

export const BottomTabContainer = styled(SafeAreaView).attrs({
  edges: ["left", "bottom", "right"],
})`
  flex: 0.11;
  flex-direction: row;
  border-top-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.gray_100 + "40"};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BottomTabButton = styled.Pressable<BottomTabContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: ${RFPercentage(0.8)}px;
  //em caso de houver o bottom tab do iphone, recaucular distancia dos ícones
  padding-top: ${({ insets }) => insets.bottom / 2}px;
`;

export const BottomTabButtomLabel = styled(Text).attrs({
  weight: "medium",
})<{ isFocused: boolean }>`
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary_500 : theme.colors.gray_200};
  font-size: ${RFValue(10)}px;
`;
