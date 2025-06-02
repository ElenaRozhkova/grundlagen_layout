import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext('light');

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () =>
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    // ⚠️ Body-Klasse beim Theme-Wechsel setzen
    useEffect(() => {
        document.body.className = ''; // zuerst leeren
        document.body.classList.add(`theme-${theme}`);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
