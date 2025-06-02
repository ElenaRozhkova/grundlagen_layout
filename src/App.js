import './App.css';
import { useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext } from './context/ThemeContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import GlobalStyle from './styles/GlobalStyle';
import ResponsiveComponent from './components/ResponsiveComponent';


function AppInner() {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={{ theme }}>
      <GlobalStyle theme={theme} />
      <LanguageProvider>
        <ResponsiveComponent />
      </LanguageProvider>
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

export default App;
