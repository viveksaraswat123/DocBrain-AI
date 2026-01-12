import React from 'react';

function ModelSelector({ selectedModel, onModelChange }) {
  return (
    <div>
      <label>Select Model: </label>
      <select value={selectedModel} onChange={(e) => onModelChange(e.target.value)}>
        <option value="openai">OpenAI</option>
        <option value="gemini">Gemini</option>
      </select>
    </div>
  );
}

export default ModelSelector;