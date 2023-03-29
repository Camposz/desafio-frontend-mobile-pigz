import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Gradient, Text } from "../styled";

export const LoginButton = styled.TouchableOpacity``;

export const LoginButtonText = styled(Text).attrs({
  weight: "medium",
})`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
`;

export const LoginButtonGradient = styled(Gradient)`
  height: ${RFPercentage(6.1)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
