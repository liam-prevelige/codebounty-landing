import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  ReactGA.initialize('G-04BBSZD7EW');
  ReactGA.send("pageview");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setSubmitted(true);
  }

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>CodeBounty</h1>
        <p>Our platform is currently still in development.</p>
        <p>The beta is expected to be launched August 12th, 2023! If you'd like to be notified of its release, submit your email below:</p>
        {/* Email sign-up form */}
        <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{
              marginRight: '1rem',
              padding: '0.5rem',
              fontSize: '1rem',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          <button 
            type="submit"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#007BFF',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Notify Me
          </button>
        </form>
        {submitted && <p style={{ color: 'green' }}>Thanks for signing up! We'll notify you when the beta is launched.</p>}
      </header>
    </div>
  );
}

export default App;
