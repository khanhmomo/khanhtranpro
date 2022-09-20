import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
