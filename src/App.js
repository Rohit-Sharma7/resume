import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Education from './pages/Education';
import Interest from './pages/Interest';
import Skills from './pages/Skills';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/education' element={<Education />}/>
        <Route path='/interest' element={<Interest />}/>
        <Route path='/skills' element={<Skills />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
