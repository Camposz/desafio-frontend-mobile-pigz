import { LoginButton, LoginButtonGradient, LoginButtonText } from "./style";

interface ActionButtonProps {
  title: string;
  onPress: () => void;
  icon?: JSX.Element;
}

export const ActionButton = ({ onPress, title, icon }: ActionButtonProps) => {
  return (
    <LoginButton onPress={onPress}>
      <LoginButtonGradient>
        {icon}
        <LoginButtonText>{title}</LoginButtonText>
      </LoginButtonGradient>
    </LoginButton>
  );
};
