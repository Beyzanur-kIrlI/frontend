import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import api from "../api";

export default function UrlTablosu() {
  const [sayfa, setSayfa] = useState(0);
  const [sayfaBoyutu, setSayfaBoyutu] = useState(10);
  const [filtre, setFiltre] = useState("");

  const { data, isLoading } = useQuery(
    ["urls", sayfa, sayfaBoyutu, filtre],
    async () => {
      const res = await api.get("/urls", {
        params: { page: sayfa + 1, page_size: sayfaBoyutu, q: filtre },
      });
      return res.data;
    },
    { keepPreviousData: true }
  );

  const sutunlar = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "url", headerName: "URL", width: 600 },
    { field: "status", headerName: "Durum", width: 120 },
    { field: "found_at", headerName: "Bulunma", width: 180 },
  ];

  const satirlar = (data?.items || []).map((u, idx) => ({
    id: u.id ?? idx + sayfa * sayfaBoyutu,
    ...u,
  }));

  return (
    <Box>
      <Typography variant="h5" gutterBottom>URL Tablosu</Typography>
      <TextField label="Filtre / Ara" value={filtre} onChange={(e) => setFiltre(e.target.value)} fullWidth sx={{ mb: 2 }} />

      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={satirlar}
          columns={sutunlar}
          pagination
          paginationMode="server"
          rowCount={data?.total || 0}
          page={sayfa}
          pageSize={sayfaBoyutu}
          onPageChange={(newPage) => setSayfa(newPage)}
          onPageSizeChange={(newSize) => { setSayfaBoyutu(newSize); setSayfa(0); }}
          loading={isLoading}
        />
      </div>
    </Box>
  );
}
