import { useNavigation } from "@react-navigation/native";
import { Eye, EyeSlash } from "phosphor-react-native";
import { useState } from "react";
import { Pressable } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { TextInput } from "../../components";
import theme from "../../theme";
import {
  ForgotPasswordText,
  Gradient,
  HighlightedSignUpText,
  LoginBackground,
  LoginButton,
  LoginButtonText,
  LoginFormContainer,
  LoginFormTitle,
  Logo,
  LogoContainer,
  LogoGoogle,
  LogoText,
  SignUpText,
  SocialLoginButton,
  SocialLoginButtonLabel,
  SocialLoginTitle,
  SocialLoginTitleContainer,
} from "./style";

export const Login = () => {
  const ICON_SIZE = RFPercentage(3.3);
  const ICON_COLOR = theme.colors.primary_500;

  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const { navigate } = useNavigation();

  return (
    <LoginBackground>
      <LogoContainer>
        <Logo />
        <LogoText>Para entregadores</LogoText>
      </LogoContainer>

      <LoginFormContainer>
        <LoginFormTitle>Login</LoginFormTitle>
        <TextInput
          title="Email ou Telefone"
          placeholder="example@pigz.com.br"
        />

        <TextInput
          title="Senha"
          placeholder="********"
          hidePassword={isPasswordHidden}
          icon={
            isPasswordHidden ? (
              <EyeSlash size={ICON_SIZE} color={ICON_COLOR} />
            ) : (
              <Eye size={ICON_SIZE} color={ICON_COLOR} />
            )
          }
          onIconPress={() => setPasswordHidden((prev) => !prev)}
        />
      </LoginFormContainer>

      <Pressable onPress={() => alert("esqueci minha senha clicado!")}>
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </Pressable>

      <LoginButton onPress={() => navigate("HomeRoutes")}>
        <Gradient>
          <LoginButtonText>Entrar</LoginButtonText>
        </Gradient>
      </LoginButton>

      <Pressable onPress={() => alert("criar conta clicado!")}>
        <SignUpText>
          Não tem uma conta?{" "}
          <HighlightedSignUpText>Criar agora!</HighlightedSignUpText>{" "}
        </SignUpText>
      </Pressable>

      <SocialLoginTitleContainer>
        <SocialLoginTitle>Entrar com</SocialLoginTitle>
      </SocialLoginTitleContainer>

      <SocialLoginButton onPress={() => alert("entrar com google clicado!")}>
        <LogoGoogle />
        <SocialLoginButtonLabel>Continuar com o Google</SocialLoginButtonLabel>
      </SocialLoginButton>
    </LoginBackground>
  );
};
