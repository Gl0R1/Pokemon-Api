import React, { useState } from 'react'

function button ({ icon, handleClick }) {
  return(
    <div>
      function next () {
      setPokemonNumber(pokemonNumber+1)
      }
      
      function last () {
      (pokemonNumber === 1)? setPokemonNumber(1): setPokemonNumber(pokemonNumber - 1)
      }
    </div>
  )
}

export {button}
