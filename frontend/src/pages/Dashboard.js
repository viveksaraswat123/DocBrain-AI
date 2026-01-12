import React, { useState } from 'react';
import PromptBox from '../components/PromptBox';
import OutputBox from '../components/OutputBox';
import ExportButtons from '../components/ExportButtons';
import ModelSelector from '../components/ModelSelector';
import axios from 'axios';

function Dashboard() {
  const [output, setOutput] = useState('');
  const [model, setModel] = useState('openai');
  const [loading, setLoading] = useState(false);

  const handleProcess = async (prompt) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/api/ai/process', {
        prompt,
        model
      });
      setOutput(response.data.result);
    } catch (error) {
      setOutput('Error processing request: ' + error.message);
    } finally {
      setLoading(false);
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
      alert('Error exporting: ' + error.message);
    }
  };

  return (
    <div className="dashboard">
      <h1>🧠 DocBrain AI Dashboard</h1>
      <div className="card">
        <ModelSelector selectedModel={model} onModelChange={setModel} />
      </div>
      <div className="card">
        <PromptBox onSubmit={handleProcess} loading={loading} />
      </div>
      <div className="card">
        <OutputBox output={output} loading={loading} />
      </div>
      <div className="card">
        <ExportButtons onExport={handleExport} />
      </div>
    </div>
  );
}

export default Dashboard;