import React from 'react'
import { FlexContent, Footer, Hero, Sales, Stories } from './components'
import {heroapi, popularsales,topratesales,highlight,sneaker, story, footerAPI} from './data/data'
import './App.css'
const App = () => {
  return (
    <div>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={topratesales}/>
        <FlexContent endpoint={sneaker}/>
        <Stories story={story}/>
      </main>
      <Footer footerAPI={footerAPI} />
    </div>
  )
}

export default App