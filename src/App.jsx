import React from 'react'
import DisplayUseState from './components/UseState/DisplayUseState'
import DisplayUseEffcet from './components/UseEffect/DisplayUseEffcet'
import DisplayUseRef from './components/UseRef/DisplayUseRef'
import DisplayUseMemo from './components/UseMemo/DisplayUseMemo'


const App = () => {
  return (
    <div>
      <DisplayUseEffcet/>
      <DisplayUseState/>
      <DisplayUseRef/>
      <DisplayUseMemo/>
    </div>
  )
}

export default App