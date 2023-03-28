import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../theme";
import { Text } from "../styled";

export const InputContainer = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.primary_500};
  border-radius: 16px;
  padding: ${RFPercentage(1.34)}px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  selectionColor: theme.colors.primary_500 + "70",
})`
  /* font-family: ${({ theme }) => theme.font_family.regular}; */
  font-size: ${RFValue(12)}px;
  /*⚠️ font size 12px equivale 14px responsivamente no celular padrao ultilizado*/
  flex: 1;
`;

export const IputContainer = styled.View``;

export const IputTitle = styled(Text).attrs({
  weight: "regular",
})`
  color: ${({ theme }) => theme.colors.gray_100};
`;
