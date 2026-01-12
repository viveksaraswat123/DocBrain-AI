import React, { useState } from 'react';

function PromptBox({ onSubmit }) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(prompt);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        rows="4"
        cols="50"
      />
      <br />
      <button type="submit">Process</button>
    </form>
  );
}

export default PromptBox;