import React from 'react';

function ExportButtons({ onExport }) {
  return (
    <div>
      <button onClick={() => onExport('pdf')}>Export as PDF</button>
    </div>
  );
}

export default ExportButtons;