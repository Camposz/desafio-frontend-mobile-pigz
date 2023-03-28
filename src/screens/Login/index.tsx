import { Eye, EyeSlash } from "phosphor-react-native";
import { useState } from "react";
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

      <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>

      <LoginButton>
        <Gradient>
          <LoginButtonText>Entrar</LoginButtonText>
        </Gradient>
      </LoginButton>

      <SignUpText>
        Não tem uma conta?{" "}
        <HighlightedSignUpText>Criar agora!</HighlightedSignUpText>{" "}
      </SignUpText>

      <SocialLoginTitleContainer>
        <SocialLoginTitle>Entrar com</SocialLoginTitle>
      </SocialLoginTitleContainer>

      <SocialLoginButton>
        <LogoGoogle />
        <SocialLoginButtonLabel>Continuar com o Google</SocialLoginButtonLabel>
      </SocialLoginButton>
    </LoginBackground>
  );
};
