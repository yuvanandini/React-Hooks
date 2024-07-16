import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseRefExample1 from './UseRefExample1'
import UseRefExample2 from './UseRefExample2'

const DisplayUseRef = () => {
  return (
    <div>
        <Routes>
        <Route path='userefexample1' element={<UseRefExample1/>} />
        <Route path='userefexample2' element={<UseRefExample2/>} />
        </Routes>
    </div>
  )
}

export default DisplayUseRef