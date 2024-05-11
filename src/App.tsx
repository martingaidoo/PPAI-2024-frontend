import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { GenReportRankingVinos } from './pages/GenReportRankingVinos'

function App() {

  return (
<>
    <Header />
    
    <GenReportRankingVinos />

</>
  )
}

export default App
