import { useEffect, useState } from "react";

export default function Reports() {
  const [crawlerHistory, setCrawlerHistory] = useState([]);
  const [summary, setSummary] = useState({ totalUrls: 0 });

  useEffect(() => {
    // Backend API'den veri çekme
    fetch("http://localhost:5000/api/crawler/history")
      .then(res => res.json())
      .then(data => {
        setCrawlerHistory(data.history || []);
        setSummary({ totalUrls: data.totalUrls || 0 });
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Crawler Summary</h2>
      <p>Total URLs found: {summary.totalUrls}</p>

      <h2>Crawler History</h2>
      <table border="1" cellPadding="5" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>URL</th>
            <th>Date</th>
            <th>Found URLs</th>
          </tr>
        </thead>
        <tbody>
          {crawlerHistory.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.url}</td>
              <td>{item.date}</td>
              <td>{item.foundUrls}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
