import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

// Center of Application. Wrapper component that houses all of the other components - to effect change, 
  // we need to modify this file or add components inside it.

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 
          'photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    // JSX: representation of HTML in JavaScript
    <div>
      <Nav categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
