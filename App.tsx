import "react-native-gesture-handler";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { AppRoutes } from "./src/routes/app.routes";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { ActivityIndicator } from "react-native";

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <AppRoutes /> : <ActivityIndicator />}
    </ThemeProvider>
  );
};

export default App;
