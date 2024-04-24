import React, { useEffect } from 'react';
import Menu from '../Menu/Menu.jsx';
import SymptomSelector from '../SymptomSelector/SymptomSelector.jsx'; // Importa el componente SymptomSelector
import ExperienceSelector from '../ExperienceSelector/ExperienceSelector.jsx'; // Importa el componente SymptomSelector

import './MainDash.css';

const MainDash = () => {
    useEffect(() => {
        document.body.classList.add('dashboard-bg');
        return () => {
            document.body.classList.remove('dashboard-bg');
        };
    }, []);

    return (
        <div className="dashboard-container">
            <Menu />
            <div className="content">
            <SymptomSelector />
            <ExperienceSelector />

                {/* Contenido del dashboard aquí */}
            </div>
        </div>
    );
};

export default MainDash;
