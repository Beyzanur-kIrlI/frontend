import { useState } from "react";

function NewCrawlerJob({ onAdd }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;
    onAdd(url);
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="URL giriniz..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border rounded-lg p-2 w-80 text-black"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Ekle
      </button>
    </form>
  );
}

export default NewCrawlerJob;
