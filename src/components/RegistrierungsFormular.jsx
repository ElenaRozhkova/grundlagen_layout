import React, { useState } from 'react';
import FormAbschnitt from './FormAbschnitt';

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
            <h2>Registrierung</h2>
            <FormAbschnitt
                titel="Persönliche Daten"
                daten={formular.persönlich}
                onChange={(feld, wert) =>
                    aktualisiereFormular('persönlich', feld, wert)
                }
            />
            <FormAbschnitt
                titel="Adresse"
                daten={formular.adresse}
                onChange={(feld, wert) =>
                    aktualisiereFormular('adresse', feld, wert)
                }
            />
            <button type="submit">Absenden</button>
        </form>
    );
}
