import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UsecallbackExample1 from './UseCallbackExample1'


const DisplayUsecallback = () => {
  return (
    <div>
        <Routes>
            <Route path='usecallbackexample1' element={<UsecallbackExample1/>}/>
        </Routes>
    </div>
  )
}

export default DisplayUsecallback