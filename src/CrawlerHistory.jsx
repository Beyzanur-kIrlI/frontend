import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import axios from "axios";

export default function CrawlerHistory() {
  const [veriler, setVeriler] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/crawler-history?page=1&page_size=10")
      .then(res => setVeriler(res.data.items))
      .catch(err => console.error(err));
  }, []);

  const sutunlar = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "url", headerName: "URL", width: 250 },
    { field: "bulunan_sayfa", headerName: "Sayfa Sayısı", width: 150 },
    { field: "tarih", headerName: "Tarih", width: 180 },
  ];

  return (
    <div className="p-6 min-h-screen" style={{ backgroundColor: "#ffc0cb" }}> 
      <h1 className="text-2xl font-bold mb-4 text-purple-800">
        🌸 Crawler History 🌸
      </h1>

      <div className="rounded-2xl shadow-lg p-4 border-4"
           style={{ borderImage: "url('https://www.transparenttextures.com/patterns/flowers.png') 30 round" }}>
        <DataGrid
          rows={veriler}
          columns={sutunlar}
          pageSize={5}
          autoHeight
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f4a7bb",
              color: "white",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#ffe6f0",
            },
          }}
        />
      </div>

      <div className="mt-4 flex gap-2">
        <Button 
          variant="contained" 
          style={{ backgroundColor: "#800080", color: "white", borderRadius: "20px" }}>
          Önceki
        </Button>
        <Button 
          variant="contained" 
          style={{ backgroundColor: "#800080", color: "white", borderRadius: "20px" }}>
          Sonraki
        </Button>
      </div>
    </div>
  );
}
