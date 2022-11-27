import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';

// Center of Application. Wrapper component that houses all of the other components - to effect change, 
  // we need to modify this file or add components inside it.

function App() {
  return (
    // JSX: representation of HTML in JavaScript
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
