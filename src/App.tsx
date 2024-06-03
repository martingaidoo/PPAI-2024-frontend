import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import { PantallaGenerarReporteRankingVino } from './Interfaz/PantallaGenerarReporteRankingVino'
import { Home } from './Interfaz/Home'

function App() {

  return (
  <>
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/GenReportRankingVinos" Component={PantallaGenerarReporteRankingVino} />
      </Routes>
    </Router>
</>
  )
}

export default App
