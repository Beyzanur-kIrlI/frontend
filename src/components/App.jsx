import React, { useState } from 'react'
import CrawlerSummary from './components/CrawlerSummary'
import CrawlerHistory from './components/CrawlerHistory'
import NewCrawlerJob from './components/NewCrawlerJob'

function App() {
  const [refresh, setRefresh] = useState(false)

  const handleJobCreated = () => setRefresh(prev => !prev)

  return (
    <div 
      style={{ 
        padding: '20px', 
        minHeight: '100vh',
        backgroundColor: '#ffc0cb', // pembe arka plan
        fontFamily: "'Comic Sans MS', cursive, sans-serif" // daha tatlı font
      }}
    >
      <h1 
        style={{
          color: '#800080', // mor başlık
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '20px',
          textShadow: '2px 2px 5px white'
        }}
      >
        🌸 Crawler Dashboard 🌸
      </h1>

      <div 
        style={{
          border: '6px solid transparent',
          borderImage: "url('https://www.transparenttextures.com/patterns/flowers.png') 30 round",
          borderRadius: '20px',
          padding: '20px',
          backgroundColor: '#ffe6f0', // açık pembe kutu içi
          boxShadow: '0 0 20px rgba(128,0,128,0.3)',
          marginBottom: '20px'
        }}
      >
        <CrawlerSummary />
      </div>

      <div className="mb-6">
        <NewCrawlerJob onJobCreated={handleJobCreated} />
      </div>

      <div 
        style={{
          border: '6px solid transparent',
          borderImage: "url('https://www.transparenttextures.com/patterns/flowers.png') 30 round",
          borderRadius: '20px',
          padding: '20px',
          backgroundColor: '#ffe6f0',
          boxShadow: '0 0 20px rgba(128,0,128,0.3)'
        }}
      >
        <CrawlerHistory key={refresh} />
      </div>
    </div>
  )
}

export default App

