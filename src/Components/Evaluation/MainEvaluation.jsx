import React, { useEffect } from 'react';
import './MainEvaluation.css';
import ShowEvaluation from './ShowEvaluation'; // Asegúrate de que la ruta sea correcta

const MainEvaluation = () => {
    useEffect(() => {
        document.body.classList.add('evaluation-bg');
        return () => {
            document.body.classList.remove('evaluation-bg');
        };
    }, []);

    return (
        <div className="evaluation-container">
            <div className="content">
                <ShowEvaluation />
            </div>
        </div>
    );
};

export default MainEvaluation;
