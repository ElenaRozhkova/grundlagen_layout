import React from 'react';

export default function FormAbschnitt({ titel, daten, onChange }) {
    return (
        <fieldset style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
            <legend>{titel}</legend>
            {Object.keys(daten).map((feld) => (
                <div key={feld} style={{ marginBottom: '10px' }}>
                    <label>
                        {feld.charAt(0).toUpperCase() + feld.slice(1)}:{' '}
                        <input
                            type="text"
                            value={daten[feld]}
                            onChange={(e) => onChange(feld, e.target.value)}
                        />
                    </label>
                </div>
            ))}
        </fieldset>
    );
}
