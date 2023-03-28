import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import LogoSvg from "../../assets/svgs/logo.svg";
import { Background, Gradient, Text } from "../../components/styled";
import theme from "../../theme";

import Google from "../../assets/svgs/logoGoogle.svg";

export const LoginBackground = styled(Background)`
  padding: 0 ${RFPercentage(3.1)}px;
`;

export const Logo = styled(LogoSvg).attrs({
  width: RFPercentage(12.8),
  /* design do figma usado com tela 414x896, uso da lib react-native-responsive-fontsize para converter as proporcoes */
  height: RFPercentage(6.4),
})``;

export const LogoText = styled(Text).attrs({
  weight: "semibold",
})`
  font-size: ${RFValue(16)}px;
  /* convertendo o RFValue fica 18px no Android Pixel 4 (celular usado como base) */
  color: ${({ theme }) => theme.colors.gray_800};
`;

export const LoginFormTitle = styled(LogoText)`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.gray_700};
`;

export const LoginInputTitle = styled(Text)`
  font-size: ${RFValue(10)}px;
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  gap: ${RFPercentage(0.8)}px;
  margin-top: ${RFPercentage(11)}px;
  margin-bottom: ${RFPercentage(4.7)}px;
`;

export const LoginFormContainer = styled.View`
  gap: ${RFPercentage(2.2)}px;
`;

export const ForgotPasswordText = styled(Text)`
  font-size: ${RFValue(11.5)}px;
  color: ${({ theme }) => theme.colors.gray_100};
  text-decoration: underline;
  margin-top: ${RFPercentage(3.1)}px;
`;

export const LoginButton = styled.TouchableOpacity`
  margin-top: ${RFPercentage(3.1)}px;
`;

export const LoginButtonText = styled(Text).attrs({
  weight: "medium",
})`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
`;

export const LoginButtonGradient = styled(Gradient)`
  height: ${RFPercentage(6.1)}px;
`;

export const SignUpText = styled(ForgotPasswordText)`
  text-decoration: none;
  align-self: center;
`;

export const HighlightedSignUpText = styled(SignUpText)`
  color: ${({ theme }) => theme.colors.primary_500};
`;

export const SocialLoginTitle = styled(LogoText)`
  font-size: ${RFValue(11.7)}px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  padding-right: 5px;
`;

export const SocialLoginTitleContainer = styled.View`
  border-bottom-width: 1px;
  justify-content: center;
  margin-top: ${RFPercentage(9)}px;
`;

export const SocialLoginButton = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.colors.gray_200};
  border-radius: 16px;
  height: ${RFPercentage(6.2)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${RFPercentage(3.1)}px;
  flex-direction: row;
`;

export const SocialLoginButtonLabel = styled(LoginButtonText)`
  color: ${({ theme }) => theme.colors.gray_100};
  top: ${RFPercentage(0.25)}px;
`;

export const LogoGoogle = styled(Google)`
  position: absolute;
  left: 5%;
`;
