import React from 'react';

function ModelSelector({ selectedModel, onModelChange }) {
  return (
    <div style={{ textAlign: 'left' }}>
      <h3>🤖 Select AI Model</h3>
      <select value={selectedModel} onChange={(e) => onModelChange(e.target.value)}>
        <option value="openai">OpenAI GPT-3.5 Turbo</option>
        <option value="gemini">Google Gemini</option>
      </select>
    </div>
  );
}

export default ModelSelector;