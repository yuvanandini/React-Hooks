import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseStateExample1 from './UseStateExample1'
import UseStateExample2 from './UseStateExample2'
import { UseStateExample3 } from './UseStateExample3'

const DisplayUseState = () => {
  return (
    <div>
        <Routes>
            <Route path='usestateexample1' element={<UseStateExample1/>}/>
            <Route path='usestateexample2' element={<UseStateExample2/>}/>
            <Route path='usestateexample3' element={<UseStateExample3/>}/>
        </Routes>
    </div>
  )
}

export default DisplayUseState