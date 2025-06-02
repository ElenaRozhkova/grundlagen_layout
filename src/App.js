import ResponsiveComponent from './components/ResponsiveComponent';
import FlexContainer from './layout/FlexContainer'
import RegistrierungsFormular from './components/RegistrierungsFormular'
import { ThemeProvider } from './context/ThemeContext';
import ThemedButton from './components/ThemedButton'
import './App.css'

import { useContext } from 'react';
import { LanguageProvider, LanguageContext } from './context/LanguageContext';
import { translations } from './translations';
import LanguageSelector from './components/LanguageSelector';

const Content = () => {
  const { language } = useContext(LanguageContext);
  const { greeting, description } = translations[language];

  return (
    <div>
      <h1>{greeting}</h1>
      <p>{description}</p>
    </div>
  );
};

function App() {


  return (
    <>

      <ThemeProvider>
        <LanguageProvider>
          <ThemedButton />
          <LanguageSelector />
          <Content />
          <h1>Responsive React App</h1>
          <FlexContainer>
            <div>Element 1</div>
            <div>Element 2</div>
          </FlexContainer>
          <ResponsiveComponent />

          <RegistrierungsFormular />
        </LanguageProvider>
      </ThemeProvider>
    </>

  );
}

export default App;
