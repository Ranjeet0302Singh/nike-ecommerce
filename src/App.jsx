import React from 'react'
import { Hero, Sales } from './components'
import {heroapi, popularsales,topratesales} from './data/data'
import './App.css'
const App = () => {
  return (
    <div>
      <main>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} />
        <Sales endpoint={topratesales}/>
      </main>
    </div>
  )
}

export default App