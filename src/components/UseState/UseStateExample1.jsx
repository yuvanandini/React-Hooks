import React, { useState } from 'react'

const UseStateExample1 = () => {

  const [color, setColor] = useState('red')

  const changecolor = () => {
    setColor('blue')
  } 

  return (
    <div>
      <h1>My favourite color is {color}</h1>
      <button onClick={changecolor}>Blue</button>
    </div>
  )
}

export default UseStateExample1