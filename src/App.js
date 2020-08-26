import React, { useEffect, useState } from 'react'
import './App.css'
import Drinks from './components/Drinks'
import MyArray from './components/MyArray'

function App() {

  return (
    <div id="myApp">
      <Drinks/>
      <MyArray/>
    </div>
  )
}

export default App;
