import ResponsiveComponent from './components/ResponsiveComponent';
import FlexContainer from './layout/FlexContainer'
import RegistrierungsFormular from './components/RegistrierungsFormular'
import { ThemeProvider } from './context/ThemeContext';
import ThemedButton from './components/ThemedButton'
import './App.css'

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemedButton />
        <h1>Responsive React App</h1>
        <FlexContainer>
          <div>Element 1</div>
          <div>Element 2</div>
        </FlexContainer>
        <ResponsiveComponent />

        <RegistrierungsFormular />
      </ThemeProvider>
    </>

  );
}

export default App;
