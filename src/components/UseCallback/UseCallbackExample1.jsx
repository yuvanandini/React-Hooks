import React, { useState } from 'react'

const UseCallbackExample1 = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
       <h1>{count}</h1>
       <button onClick={()=>setCount(prev=>prev+1)}>Click Here</button> 
    </div>
  )
}

export default UseCallbackExample1