import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemedButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className={`button-${theme}`}
            onClick={toggleTheme}
            style={{
                padding: '10px 20px',
                margin: '10px',
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                border: '1px solid',
                borderRadius: '5px',
            }}
        >
            Theme wechseln (Aktuell: {theme})
        </button>
    );
}
