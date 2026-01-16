import React from 'react';

function OutputBox({ output, loading }) {
  return (
    <div>
      <h3>AI Response</h3>
      <div className="output-box">
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <span className="loading"></span>
            <p>Generating AI response...</p>
          </div>
        ) : output ? (
          output
        ) : (
          <p style={{ color: '#888', fontStyle: 'italic' }}>
            Your AI-generated response will appear here.
          </p>
        )}
      </div>
    </div>
  );
}

export default OutputBox;