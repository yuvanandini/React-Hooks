//usecontext hook is used to access data from any component with passing it through props at every where
//usecontext is used to manage global data in the react app

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile'

const DisplayUseContext = () => {
  return (
    <div>
      <Routes>
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default DisplayUseContext