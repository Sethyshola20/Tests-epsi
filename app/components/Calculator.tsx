// src/Calculator.tsx

import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      // Utilisation de `Function` pour l'évaluation au lieu de `eval` pour éviter les failles de sécurité
      const result = new Function(`return ${input}`)();
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="flex justify-center flex-row bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-80">
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full bg-gray-200 p-4 text-right text-2xl rounded"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button onClick={handleClear} className="col-span-2 bg-red-500 text-white p-4 rounded">C</button>
          <button onClick={() => handleClick('/')} className="bg-gray-300 p-4 rounded">/</button>
          <button onClick={() => handleClick('*')} className="bg-gray-300 p-4 rounded">*</button>
          <button onClick={() => handleClick('7')} className="bg-gray-200 p-4 rounded">7</button>
          <button onClick={() => handleClick('8')} className="bg-gray-200 p-4 rounded">8</button>
          <button onClick={() => handleClick('9')} className="bg-gray-200 p-4 rounded">9</button>
          <button onClick={() => handleClick('-')} className="bg-gray-300 p-4 rounded">-</button>
          <button onClick={() => handleClick('4')} className="bg-gray-200 p-4 rounded">4</button>
          <button onClick={() => handleClick('5')} className="bg-gray-200 p-4 rounded">5</button>
          <button onClick={() => handleClick('6')} className="bg-gray-200 p-4 rounded">6</button>
          <button onClick={() => handleClick('+')} className="bg-gray-300 p-4 rounded">+</button>
          <button onClick={() => handleClick('1')} className="bg-gray-200 p-4 rounded">1</button>
          <button onClick={() => handleClick('2')} className="bg-gray-200 p-4 rounded">2</button>
          <button onClick={() => handleClick('3')} className="bg-gray-200 p-4 rounded">3</button>
          <button onClick={handleEqual} className="row-span-2 bg-green-500 text-white p-4 rounded">=</button>
          <button onClick={() => handleClick('0')} className="col-span-2 bg-gray-200 p-4 rounded">0</button>
          <button onClick={() => handleClick('.')} className="bg-gray-200 p-4 rounded">.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
