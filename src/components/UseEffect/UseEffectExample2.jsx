import React, { useEffect, useState } from 'react'

const UseEffectExample2 = () => {

    const [count, setCount] = useState(0)
    // const [name, setName] = useState('GreatStack')

    useEffect(()=>{
      setTimeout(() => {
        setCount(count=>count+1);
      }, 2000);
    },[count])


  return (
    <div>
        <h1>I've rendered {count} times!</h1>
    </div>
  )
}

export default UseEffectExample2