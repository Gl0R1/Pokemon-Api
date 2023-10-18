
import './App.css'
import { useEffect, useState } from 'react';



function App() {

    let [pokemonNumber, setPokemonNumber] = useState(10);
    let [pokemonName, setPokemonName] = useState('');
  
    function next() {
      setPokemonNumber(pokemonNumber + 1);
      //console.log('valor antes del nuevo render')
    }

    function last () {
    (pokemonNumber === 1)? setPokemonNumber(1): setPokemonNumber(pokemonNumber - 1)
    }

    

    useEffect(()=>{
      // console.log('valor al actualizar el estado ' + pokemonNumber)
      // fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
      // .then(result=>result.json())
      // .then(data=>setPokemonName(data.name))
       searchPokemon(pokemonNumber)
      //se pasa pokemonNumber por el array para que el estado solo sea llamado 1 vez
    },[pokemonNumber]);
    //
    const searchPokemon = async (pokemonNumber) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
      const data = await response.json();
      setPokemonName(data.name)
    }

  return (
    <div>

      <button className='boton' onClick={last}>Last</button>
      <button className='boton-reiniciar' onClick={next}>Next</button>
     
      <div className='pokedex'>Numero de Pokedex: {pokemonNumber}</div>
      <div className='nombre'>Nombre pokemon:  {pokemonName}</div>
      
    </div>

   
   
  )
}

export default App
