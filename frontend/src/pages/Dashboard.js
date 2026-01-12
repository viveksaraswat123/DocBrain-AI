import React, { useState } from 'react';
import PromptBox from '../components/PromptBox';
import OutputBox from '../components/OutputBox';
import ExportButtons from '../components/ExportButtons';
import ModelSelector from '../components/ModelSelector';
import axios from 'axios';

function Dashboard() {
  const [output, setOutput] = useState('');
  const [model, setModel] = useState('openai');

  const handleProcess = async (prompt) => {
    try {
      const response = await axios.post('http://localhost:8000/api/ai/process', {
        prompt,
        model
      });
      setOutput(response.data.result);
    } catch (error) {
      setOutput('Error processing request');
    }
  };

  const handleExport = async (format) => {
    try {
      const response = await axios.post('http://localhost:8000/api/export/export', {
        content: output,
        format
      });
      alert(`Exported to ${response.data.file_path}`);
    } catch (error) {
      alert('Error exporting');
    }
  };

  return (
    <div>
      <h1>DocBrain AI Dashboard</h1>
      <ModelSelector selectedModel={model} onModelChange={setModel} />
      <PromptBox onSubmit={handleProcess} />
      <OutputBox output={output} />
      <ExportButtons onExport={handleExport} />
    </div>
  );
}

export default Dashboard;