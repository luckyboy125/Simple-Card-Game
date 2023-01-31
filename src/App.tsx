import "./App.css";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";

import Layout from "layout/Layout";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
