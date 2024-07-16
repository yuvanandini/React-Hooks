import React, { useState } from 'react'

export const UseStateExample3 = () => {

    const [count, setCount] = useState(0);

    const increasecount = () => {
        setCount(count+1)
    }

    // updating step counts
    // const increasecount = () => {
    //     setCount(prev => prev+1)
    //     setCount(prev => prev+1)
    //     setCount(prev => prev+1)
    //     setCount(prev => prev+1)
    // }

  return (
    <div>
         <h1>Count: {count} </h1>
        <button onClick={increasecount}>Increase</button>
    </div>
  )
}
