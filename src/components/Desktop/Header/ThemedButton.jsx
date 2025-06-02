import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

export default function ThemedButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            style={{
                padding: '8px 16px',
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
            }}
        >
            {theme === 'light' ? '☀️ ' : '🌙'}
        </button>
    );
}
