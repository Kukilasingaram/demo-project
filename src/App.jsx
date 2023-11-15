
import { useState } from 'react'
import './App.css'

import Workspace from './components/WorkSpace'
import MainBar from './components/MainBar'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'





function App() {
  
  return (
    <div className='app'>
    <h1>Doctor Details</h1>
  <Workspace>
  <MainBar/>
  <SideBar/>
  <TopBar/>
    
  </Workspace>

    </div>
  )
}

export default App
