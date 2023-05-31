import React from 'react'
import './App.css';
import Sidebar from './Components/Sidebar';
import Userchat from './Components/Userchat';
const App = () => {
  return (
    <div className="app">
      <div className="main-container">
        <Sidebar />
        <Userchat/>
      </div>
    </div>
  )
}

export default App
