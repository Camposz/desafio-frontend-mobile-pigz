import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Text } from "../styled";

export const DeliveryIndicatorContainer = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.gray_100 + "20"};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  width: ${RFPercentage(12.2)}px;
  padding: ${RFPercentage(1.1)}px;
  gap: ${RFPercentage(1.1)}px;
`;

export const DeliveryIndicatorTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.gray_200};
`;

export const DeliveryIndicatorAmount = styled(Text).attrs({
  weight: "medium",
})`
  color: ${({ theme }) => theme.colors.gray_800};
  font-size: ${RFValue(35)}px;
  line-height: ${RFPercentage(6)}px;
`;
