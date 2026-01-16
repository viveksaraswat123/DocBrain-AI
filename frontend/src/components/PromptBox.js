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
    <div>
      <h3>Input Prompt</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your document processing prompt here..."
            rows="6"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? (
            <>
              <span className="loading"></span>
              Processing...
            </>
          ) : (
            'Process Document'
          )}
        </button>
      </form>
    </div>
  );
}

export default PromptBox;