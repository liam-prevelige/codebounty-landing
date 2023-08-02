import React from 'react';
import ReactGA from 'react-ga4';
import './App.css';

function App() {
  ReactGA.initialize('G-04BBSZD7EW');
  ReactGA.send("pageview");

  return (
    <div className="App">
      <header className="App-header">
        <h1>CodeBounty</h1>
        <p>Our platform is currently still in development. Check back soon to join the beta launch!</p>
      </header>
    </div>
  );
}

export default App;
