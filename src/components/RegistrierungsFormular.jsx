import React, { useState, useContext } from 'react';
import FormAbschnitt from './FormAbschnitt';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../translations';

export default function RegistrierungsFormular() {
    const [formular, setFormular] = useState({
        persönlich: {
            name: '',
            email: ''
        },
        adresse: {
            straße: '',
            stadt: ''
        }
    });

    const { language } = useContext(LanguageContext);
    const t = translations[language];

    const aktualisiereFormular = (kategorie, feld, wert) => {
        setFormular(prev => ({
            ...prev,
            [kategorie]: {
                ...prev[kategorie],
                [feld]: wert
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulardaten:', formular);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{t.registration}</h2>

            <FormAbschnitt
                titel={t.personalData}
                daten={formular.persönlich}
                feldNamen={{ name: t.name, email: t.email }}
                onChange={(feld, wert) =>
                    aktualisiereFormular('persönlich', feld, wert)
                }
            />

            <FormAbschnitt
                titel={t.address}
                daten={formular.adresse}
                feldNamen={{ straße: t.street, stadt: t.city }}
                onChange={(feld, wert) =>
                    aktualisiereFormular('adresse', feld, wert)
                }
            />

            <button type="submit">{t.submit}</button>
        </form>
    );
}
