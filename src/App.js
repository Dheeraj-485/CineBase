import React from 'react'
import "./App.css"
import "./index"
import { Header,Footer } from './components'
import Allroutes from './routes/Allroutes'


const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Allroutes/>
      <Footer/>
    </div>
  )
}

export default App