import React, { useEffect, useState } from 'react';

import { RickMortyTable } from './components/RickMortyTable';
import { Character } from './interfaces/character.interface';


function App() {
  const [rickAndMortyData, setRickAndMortyData] = useState<{results: Character[]}>({results: []});
  
  //Pull this out to a custom hook
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=2").then((res) => {
      return res.json();
    }).then(data => {
      setRickAndMortyData(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Route Smart Technical Assessment</h1>
      </header>
      <RickMortyTable characters={rickAndMortyData.results}/>
    </div>
  );
}

export default App;
