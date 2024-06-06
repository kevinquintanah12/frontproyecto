import React, { useState } from 'react';
import InputField from './InputField'; // Asegúrate de que la ruta sea correcta

const ShowEvaluation = () => {
  const [jsonInput, setJsonInput] = useState('');

  const handleInputChange = (event) => {
    setJsonInput(event.target.value);
  };

  return (
    <div>
    
      <InputField
        label=""
        description=""
        value={jsonInput}
        onChange={handleInputChange}
      />
      <div>
        <h3></h3>
        <pre>{jsonInput}</pre> {/* Display the JSON input for demonstration */}
      </div>
    </div>
  );
};

export default ShowEvaluation;
