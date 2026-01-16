import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PromptBox from '../components/PromptBox';
import OutputBox from '../components/OutputBox';
import ExportButtons from '../components/ExportButtons';
import ModelSelector from '../components/ModelSelector';
import api from '../api/client';

function Dashboard() {
  const [output, setOutput] = useState('');
  const [model, setModel] = useState('openai');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleProcess = async (prompt) => {
    setLoading(true);
    try {
      const response = await api.post('/api/ai/process', {
        prompt,
        model
      });
      setOutput(response.data.result);
    } catch (error) {
      setOutput('Error processing request: ' + (error.response?.data?.detail || error.message));
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async (format) => {
    try {
      const response = await api.post('/api/export/export', null, {
        params: { content: output, format }
      });
      alert(`Exported to ${response.data.file_path}`);
    } catch (error) {
      alert('Error exporting: ' + (error.response?.data?.detail || error.message));
    }
  };

  return (
    <div className="dashboard">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>DocBrain AI</h1>
        <button onClick={handleLogout} style={{ background: '#ff4757', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
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