import { Eye, EyeSlash } from "phosphor-react-native";
import { Pressable } from "react-native";
import { Input, InputContainer, IputContainer, IputTitle } from "./style";

interface TextInputProps {
  title: string;
  placeholder?: string;
  hidePassword?: boolean;
  icon?: JSX.Element;
  onIconPress?: () => void;
}

export const TextInput = ({
  placeholder,
  title,
  hidePassword = false,
  icon,
  onIconPress,
}: TextInputProps) => {
  return (
    <IputContainer>
      <IputTitle>{title}</IputTitle>
      <InputContainer>
        <Input placeholder={placeholder} secureTextEntry={hidePassword} />
        <Pressable onPress={onIconPress}>{icon}</Pressable>
      </InputContainer>
    </IputContainer>
  );
};
