import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import Example from "./components/buttons-test";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

         
      </header> */}

      
   <section className="sections hero-section" id="hero">
     <h1>Hero</h1>
   </section>
   <section className="sections projects-section" id="projects">
     <h1>projects</h1>
   </section>
   <section className="sections contact-section" id="projects">
     <h1>contact </h1>
   </section>
      
    </div>

  );
}

export default App;
