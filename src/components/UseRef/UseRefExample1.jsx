import React, { useEffect, useRef, useState } from 'react'

const UseRefExample1 = () => {

    const [value, setValue] = useState(0)
   const count = useRef(0);

   useEffect(()=>{
    count.current=count.current+1;
   })


  return (
    <div>
        <center>
        <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
        <h1>{value}</h1>
        <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
        <h1>Render Count : {count.current}</h1>
        </center>
        
    </div>
  )
}

export default UseRefExample1