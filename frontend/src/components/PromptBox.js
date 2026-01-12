import React, { useState } from 'react';

function PromptBox({ onSubmit, loading }) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
    }
  };

  return (
    <div style={{ textAlign: 'left' }}>
      <h3>💬 Enter Your Prompt</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what you want to process with AI..."
          rows="6"
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? <span className="loading"></span> : '🚀 Process'}
        </button>
      </form>
    </div>
  );
}

export default PromptBox;