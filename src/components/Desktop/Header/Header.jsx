import React, { useContext } from 'react';
import ThemedButton from './ThemedButton';
import LanguageSelector from './LanguageSelector';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Header() {
    const { theme } = useContext(ThemeContext);

    const styles = {
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: theme === 'light' ? '#e6d6fa' : '#222', // violett/dunkel
            borderBottom: `1px solid ${theme === 'light' ? '#ccc' : '#444'}`,
            color: theme === 'light' ? '#000' : '#fff',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        },
    };

    return (
        <header style={styles.header}>
            <div style={styles.logo}>🌐 MyApp</div>
            <div style={styles.controls}>
                <LanguageSelector />
                <ThemedButton />
            </div>
        </header>
    );
}
