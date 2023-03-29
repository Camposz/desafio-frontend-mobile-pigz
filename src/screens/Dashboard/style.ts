import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Gradient, Background, Text } from "../../components/styled";
import { Input, IputTitle } from "../../components/TextInput/style";

export const BannerGradient = styled(Gradient)`
  padding: ${RFPercentage(2)}px;
  height: ${RFPercentage(12.3)}px;
  justify-content: space-between;
  margin-top: ${RFPercentage(4)}px;
`;

export const DashboardBackground = styled(Background)`
  padding: 0 ${RFPercentage(4.5)}px;
`;

export const BannerText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
`;

export const BannerAmountText = styled(Text).attrs({
  weight: "bold",
})`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(26)}px;
  line-height: ${RFPercentage(4.5)}px;
`;

export const BannerSection = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const DeliveryInfoContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  elevation: 6;
  border-radius: 16px;
  padding: ${RFPercentage(1.5)}px;
  padding-bottom: ${RFPercentage(3.8)}px;
  margin-top: ${RFPercentage(3.6)}px;
  gap: ${RFPercentage(1.5)}px;
`;

export const DeliveryInfoTitle = styled(BannerAmountText)`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.gray_800};
`;

export const IndicatorsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const NewDeliveryContainer = styled(DeliveryInfoContainer)`
  gap: 0;
`;

export const NewDeliveryButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary_500};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
`;

export const NewDeliveryButtonText = styled(Text).attrs({
  weight: "medium",
})`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
  line-height: ${RFPercentage(3)}px;
`;

export const NewDeliveryInputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 15px;
`;

export const DeliveryInput = styled(Input)`
  border: 1px solid ${({ theme }) => theme.colors.primary_500};
  border-radius: 16px;
  font-size: ${RFValue(14)}px;
  padding: ${RFPercentage(1)}px;
`;

export const DeliveryText = styled(IputTitle)`
  margin-bottom: 5px;
`;
