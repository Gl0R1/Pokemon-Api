import React from 'react'

export const Boton = ({ text, handleClick }) => {
  return (
    <div className='button-container'>
      <button 
        className='button' 
        onClick={handleClick}
      >
      </button>
      <div className='button__shadow'></div>
      
    </div>
  )
}

