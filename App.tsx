import "react-native-gesture-handler";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { AppRoutes } from "./src/routes/app.routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
