import React from 'react'
import './App.css'
import {Footer,Blog,Features,Possibility,Header,WhatJenic} from './containers'
import {CTA,Brand,Navbar} from './components'

const App = () => {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatJenic />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
     
    </div>
  )
}

export default App
