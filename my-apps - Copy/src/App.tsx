import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PokemonController } from './Components/artList/Controller';
// import {Counter} from './Components/Search';
import Counter from './Components/Search';

// C:\Users\kerub\js_4011\my-apps\src\Components\Search.tsx
function App() {
  return (
    <div className="App">
      <PokemonController />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
