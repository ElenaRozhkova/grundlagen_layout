import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';

const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                cursor: 'pointer',
            }}
        >
            <option value="de">DE</option>
            <option value="en">EN</option>

        </select>
    );
};

export default LanguageSelector;

