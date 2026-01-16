import React from 'react';

function ModelSelector({ selectedModel, onModelChange }) {
  return (
    <div className="form-group">
      <label className="label">AI Model Selection</label>
      <select value={selectedModel} onChange={(e) => onModelChange(e.target.value)}>
        <option value="openai">OpenAI GPT-3.5 Turbo</option>
        <option value="gemini">Google Gemini</option>
      </select>
      <p>Select the AI model to process your documents.</p>
    </div>
  );
}

export default ModelSelector;