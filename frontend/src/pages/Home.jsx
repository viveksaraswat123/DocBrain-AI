import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <nav className="navbar">
          <div className="nav-brand">DocBrain AI</div>
          <div className="nav-links">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
        <div className="hero-content">
          <h1>Revolutionize Document Processing with AI</h1>
          <p>DocBrain AI harnesses the power of advanced AI models to analyze, summarize, and generate insights from your documents.</p>
          <Link to="/register" className="cta-button">Get Started</Link>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <h2>What DocBrain Does</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>AI-Powered Analysis</h3>
              <p>Utilize cutting-edge AI models like OpenAI GPT and Google Gemini to process and understand your documents.</p>
            </div>
            <div className="feature-card">
              <h3>Smart Summarization</h3>
              <p>Generate concise summaries of lengthy documents, extracting key information and insights.</p>
            </div>
            <div className="feature-card">
              <h3>Multi-Format Export</h3>
              <p>Export your processed content in PDF, TXT, or DOCX formats for easy sharing and integration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Input Your Prompt</h3>
              <p>Describe what you want to do with your document or enter the content directly.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Choose AI Model</h3>
              <p>Select between OpenAI GPT-3.5 Turbo or Google Gemini for processing.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Results</h3>
              <p>Receive AI-generated responses and export them in your preferred format.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 DocBrain AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;