import { Eye, EyeSlash } from "phosphor-react-native";
import { useState } from "react";
import { Pressable } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { ActionButton } from "../../components/ActionButton";
import { DeliveryIndicator } from "../../components/DeliveryIndicator";
import theme from "../../theme";
import {
  BannerAmountText,
  BannerGradient,
  BannerSection,
  BannerText,
  DashboardBackground,
  DeliveryInfoContainer,
  DeliveryInfoTitle,
  DeliveryInput,
  DeliveryText,
  IndicatorsContainer,
  NewDeliveryButton,
  NewDeliveryButtonText,
  NewDeliveryContainer,
  NewDeliveryInputContainer,
} from "./style";

import QrCode from "../../assets/svgs/qrCode.svg";

export const Dashboard = () => {
  const [isAmountHidden, setAmountHidden] = useState(false);

  return (
    <DashboardBackground>
      <BannerGradient>
        <BannerSection>
          <BannerText>Ganhos do dia</BannerText>
          <BannerText>29/07</BannerText>
        </BannerSection>

        <BannerSection>
          <BannerAmountText>
            {isAmountHidden ? " --- " : "R$ 150"}
          </BannerAmountText>
          <Pressable onPress={() => setAmountHidden((prev) => !prev)}>
            {!isAmountHidden ? (
              <Eye color={theme.colors.white} size={RFPercentage(3.3)} />
            ) : (
              <EyeSlash color={theme.colors.white} size={RFPercentage(3.3)} />
            )}
          </Pressable>
        </BannerSection>
      </BannerGradient>

      <DeliveryInfoContainer>
        <DeliveryInfoTitle>Resumo das Entregas</DeliveryInfoTitle>
        <IndicatorsContainer>
          <DeliveryIndicator title="Aceitas" amount={15} />
          <DeliveryIndicator title="Rejeitadas" amount={5} />
          <DeliveryIndicator title="Total" amount={20} />
        </IndicatorsContainer>
      </DeliveryInfoContainer>

      <NewDeliveryContainer>
        <DeliveryInfoTitle>Iniciar Nova Entrega</DeliveryInfoTitle>
        <DeliveryText>Número de Identificação</DeliveryText>
        <NewDeliveryInputContainer>
          <DeliveryInput />
          <NewDeliveryButton>
            <NewDeliveryButtonText>OK</NewDeliveryButtonText>
          </NewDeliveryButton>
        </NewDeliveryInputContainer>

        <ActionButton
          title="Escanear Qrcode"
          onPress={() => {}}
          icon={<QrCode />}
        />
      </NewDeliveryContainer>
    </DashboardBackground>
  );
};
