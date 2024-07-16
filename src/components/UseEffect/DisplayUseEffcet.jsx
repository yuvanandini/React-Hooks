import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseEffectExample1 from './UseEffectExample1'
import UseEffectExample2 from './UseEffectExample2'

const DisplayUseEffcet = () => {
  return (
    <div>
        <Routes>
            <Route path='useeffectexample1' element={<UseEffectExample1/>} />
            <Route path='useeffectexample2' element={<UseEffectExample2/>} />
        </Routes>
    </div>
  )
}

export default DisplayUseEffcet