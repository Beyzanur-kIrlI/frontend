import React, { useEffect, useState } from 'react'

function CrawlerSummary() {
  const [totalUrls, setTotalUrls] = useState(0)

  useEffect(() => {
    fetch('http://localhost:5000/api/crawler/summary')
      .then(res => res.json())
      .then(data => setTotalUrls(data.totalUrls))
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Total URLs Found: {totalUrls}</h2>
    </div>
  )
}

export default CrawlerSummary
