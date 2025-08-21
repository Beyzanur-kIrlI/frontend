import React, { useState } from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";
import api from "./api";

export default function NewCrawlerJob() {
  const [url, setUrl] = useState("");

  const handleSubmit = async () => {
    try {
      await api.post("/jobs", { type: "crawler", url });
      alert("Yeni crawler job eklendi!");
      setUrl("");
    } catch (err) {
      console.error(err);
      alert("Hata oluştu!");
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>🌐 Yeni Crawler Job</Typography>
      <TextField
        label="Site URL"
        fullWidth
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="secondary" onClick={handleSubmit}>
        Başlat
      </Button>
    </Paper>
  );
}
