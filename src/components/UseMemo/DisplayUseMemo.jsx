import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseMemoExample1 from './UseMemoExample1'

const DisplayUseMemo = () => {
  return (
    <div>
        <Routes>
        <Route path='usememoexample1' element={<UseMemoExample1/>} />
        </Routes>
    </div>
  )
}

export default DisplayUseMemo