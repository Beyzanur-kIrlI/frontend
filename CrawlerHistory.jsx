function CrawlerHistory({ jobs }) {
  return (
    <div className="mt-8 bg-purple-900 rounded-xl p-4 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Crawler History</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-purple-700">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">URL</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Found URLs</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-4 text-gray-300">
                Henüz veri yok
              </td>
            </tr>
          ) : (
            jobs.map((job) => (
              <tr key={job.id} className="text-center">
                <td className="p-2 border">{job.id}</td>
                <td className="p-2 border">{job.url}</td>
                <td className="p-2 border">{job.date}</td>
                <td className="p-2 border">{job.found}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CrawlerHistory;
