import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import theme from "../theme";

interface TextProps {
  weight?: "bold" | "semibold" | "medium" | "regular";
}

export const Background = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.Text<TextProps>`
  font-family: ${({ theme, weight = "regular" }) => theme.font_family[weight]};
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: [theme.colors.primary_200, theme.colors.primary_500],
  start: { x: 0.3, y: 0 },
})`
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;
