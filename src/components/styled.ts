import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

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
