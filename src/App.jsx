import React from 'react'
import DisplayUseState from './components/UseState/DisplayUseState'
import DisplayUseEffcet from './components/UseEffect/DisplayUseEffcet'
import DisplayUseRef from './components/UseRef/DisplayUseRef'
import DisplayUseMemo from './components/UseMemo/DisplayUseMemo'
import DisplayUsecallback from './components/UseCallback/DisplayUsecallback'
import Header from './components/Header'
import DisplayUseContext from './components/UseContext/DisplayUseContext'
import Profile from './components/UseContext/Profile'
import Footer from './components/UseContext/Footer'
import Contact from './components/UseContext/Contact'




const App = () => {
  return (
    <div>
      <Header/>
      <DisplayUseEffcet/>
      <DisplayUseState/>
      <DisplayUseRef/>
      <DisplayUseMemo/>
      <DisplayUsecallback/>
      <DisplayUseContext/>
      <Profile/>
      <Footer/>
      <Contact/>
    </div>
  )
}

export default App