import React, { useEffect, useState } from 'react'

const UseEffectExample1 = () => {

    const [count, setCount] = useState(0)

    useEffect(()=>{
      setTimeout(() => {
        setCount(count=>count+1);
      }, 2000);
    })

  return (
    <div>
        <h1>I've rendered {count} times!</h1>
    </div>
  )
}

export default UseEffectExample1