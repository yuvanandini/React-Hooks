import React from 'react'
import DisplayUseState from './components/UseState/DisplayUseState'
import DisplayUseEffcet from './components/UseEffect/DisplayUseEffcet'
import DisplayUseRef from './components/UseRef/DisplayUseRef'
import DisplayUseMemo from './components/UseMemo/DisplayUseMemo'
import DisplayUsecallback from './components/UseCallback/DisplayUsecallback'
import Header from './components/Header'




const App = () => {
  return (
    <div>
      <Header/>
      <DisplayUseEffcet/>
      <DisplayUseState/>
      <DisplayUseRef/>
      <DisplayUseMemo/>
      <DisplayUsecallback/>
    </div>
  )
}

export default App