import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_DATA } from './query/pokemon';
import { CreatureList } from './components/CreatureList/CreatureList';
import { Loader } from './components/Loader/Loader';

import './App.css';

function App() {
  const { data, loading, error } = useQuery(GET_ALL_DATA);

  return (
    <div className='App'>{loading ? <Loader /> : <CreatureList pokemons={data.pokemons} />}</div>
  );
}

export default App;
