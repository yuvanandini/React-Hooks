import React, { useState } from 'react'

const UseStateExample2 = () => {

    const [car, setCar] = useState({
        brand:'Ferrari',
        Model:'Roma',
        color:'red',
        year:'2023'
    })

    const changecar = () => {
        setCar((prev)=>{
            return {...prev,color:'blue'}
        })
    }

  return (
    <div>
        <h1>My {car.brand}</h1>
        <h2>It is a {car.color} {car.Model} from {car.year}</h2>
        <button onClick={changecar}>CLickme</button>
    </div>
  )
}

export default UseStateExample2