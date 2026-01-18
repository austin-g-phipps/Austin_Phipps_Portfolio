import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route index element = {<Home />}/>
        <Route path="*" element = {<NotFound />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
