import React, { useRef } from 'react'

const UseRefExample2 = () => {

    const inputelem = useRef();

    const btnClick = () => {
        console.log(inputelem.current);
        inputelem.current.style.background = 'blue'
    }

  return (
    <div>
        <center>
            <input type="text" ref={inputelem} />
            <button onClick={btnClick}>Click Here</button>
        </center>
    </div>
  )
}

export default UseRefExample2