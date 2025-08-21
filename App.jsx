import { useState } from "react";
import NewCrawlerJob from "./NewCrawlerJob";
import CrawlerHistory from "./CrawlerHistory";

function App() {
  const [jobs, setJobs] = useState([]);

  const handleAddJob = (url) => {
    const newJob = {
      id: jobs.length + 1,
      url,
      date: new Date().toLocaleString(),
      found: 0,
    };
    setJobs([...jobs, newJob]);
  };

  return (
    <div className="p-6 text-white bg-purple-800 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🌸 Crawler Dashboard 🌸
      </h1>

      <p className="text-center text-lg mb-6">
        Total URLs Found: {jobs.length}
      </p>

      <div className="flex justify-center">
        <NewCrawlerJob onAdd={handleAddJob} />
      </div>

      <CrawlerHistory jobs={jobs} />
    </div>
  );
}

export default App;
