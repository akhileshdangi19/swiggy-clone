import React from 'react'
import Header from './component/Header'
import './App.css'
import Topcards from './component/Topcards'
import Footer from './component/Footer'
import MainContainer from './component/MainContainer'
const App = () => {
  return (
    <div>
      <Header/>
      <Topcards/>
      <MainContainer/>
      <Footer/>
    </div>
  )
}

export default App