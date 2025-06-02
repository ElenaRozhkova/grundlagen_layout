
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function MobileView() {
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
            Mobile View (Theme: {theme})
        </div>
    );
}