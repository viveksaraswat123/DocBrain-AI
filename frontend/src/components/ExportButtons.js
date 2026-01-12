import React from 'react';

function ExportButtons({ onExport }) {
  return (
    <div style={{ textAlign: 'left' }}>
      <h3>📤 Export Options</h3>
      <p>Export your AI-generated content:</p>
      <button onClick={() => onExport('pdf')}>📄 Export as PDF</button>
      <button onClick={() => onExport('txt')}>📝 Export as TXT</button>
      <button onClick={() => onExport('docx')}>📋 Export as DOCX</button>
    </div>
  );
}

export default ExportButtons;