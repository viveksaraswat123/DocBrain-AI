import React from 'react';

function OutputBox({ output, loading }) {
  return (
    <div style={{ textAlign: 'left' }}>
      <h3>📄 AI Response</h3>
      <div className="output-box">
        {loading ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <span className="loading" style={{ width: '30px', height: '30px' }}></span>
            <p>Generating response...</p>
          </div>
        ) : output ? (
          output
        ) : (
          <p style={{ color: '#666', fontStyle: 'italic' }}>Your AI-generated response will appear here.</p>
        )}
      </div>
    </div>
  );
}

export default OutputBox;