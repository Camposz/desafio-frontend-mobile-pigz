import { Dimensions } from "react-native";
import { Text } from "../styled";
import {
  DeliveryIndicatorAmount,
  DeliveryIndicatorContainer,
  DeliveryIndicatorTitle,
} from "./style";

interface DeliveryIndicatorProps {
  title: string;
  amount: number;
}

const { height } = Dimensions.get("window");
console.log(height);

export const DeliveryIndicator = ({
  title,
  amount,
}: DeliveryIndicatorProps) => {
  return (
    <DeliveryIndicatorContainer>
      <DeliveryIndicatorTitle>{title}</DeliveryIndicatorTitle>
      <DeliveryIndicatorAmount>{amount}</DeliveryIndicatorAmount>
    </DeliveryIndicatorContainer>
  );
};
