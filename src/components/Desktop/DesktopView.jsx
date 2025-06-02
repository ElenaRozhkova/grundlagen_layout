import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Header from './Header/Header';


export default function DesktopView({ children }) {  // children als Prop
    const { theme } = useContext(ThemeContext);

    const styles = {
        light: {
            backgroundColor: '#e6e6fa', // helles Lila
            color: '#000',
        },
        dark: {
            backgroundColor: '#2c2c3c', // dunkler Hintergrund
            color: '#fff',
        },
    };

    return (
        <div style={{ padding: '20px', ...styles[theme] }}>
            <div>Desktop View (Theme: {theme})</div>
            <hr />
            <Header />
            <div>{children}</div>
        </div>
    );
}
