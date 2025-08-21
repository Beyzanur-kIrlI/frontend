import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Paper, CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import api from "../api";

export default function KomutCalistir() {
  const [komut, setKomut] = useState("");
  const [jobId, setJobId] = useState(null);
  const [cikti, setCikti] = useState("");
  const [durum, setDurum] = useState(null);

  const calistir = useMutation(
    (komutStr) => api.post("/jobs/command", { command: komutStr }),
    {
      onSuccess: (res) => {
        const id = res?.data?.id;
        setJobId(id);
        setDurum("queued");
        setCikti("");
      },
      onError: (err) => {
        setCikti("Komut gönderme hatası: " + (err?.response?.data?.message || err.message));
      },
    }
  );

  useEffect(() => {
    if (!jobId) return;
    let aktif = true;
    const interval = setInterval(async () => {
      try {
        const r = await api.get(`/jobs/${jobId}`);
        if (!aktif) return;
        const data = r.data;
        setDurum(data.status || data.durum || "unknown");

        if ((data.status && (data.status === "finished" || data.status === "completed")) ||
            (data.durum && (data.durum === "başarılı" || data.durum === "tamamlandı"))) {
          clearInterval(interval);
          const out = await api.get(`/jobs/${jobId}/output`);
          if (!aktif) return;
          setCikti(out.data.output || out.data.cikti || JSON.stringify(out.data));
        }
      } catch (e) {
        console.error(e);
      }
    }, 2000);

    return () => {
      aktif = false;
      clearInterval(interval);
    };
  }, [jobId]);

  const handleSubmit = () => {
    if (!komut.trim()) {
      setCikti("Lütfen bir komut girin.");
      return;
    }
    setCikti("");
    calistir.mutate(komut);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Komut Çalıştır</Typography>

      <TextField
        label="Komut (ör: echo merhaba)"
        fullWidth
        value={komut}
        onChange={(e) => setKomut(e.target.value)}
      />

      <Box mt={2} display="flex" gap={2}>
        <Button variant="contained" color="primary" onClick={handleSubmit} disabled={calistir.isLoading}>
          {calistir.isLoading ? <CircularProgress size={20} /> : "Çalıştır"}
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => { setKomut(""); setCikti(""); setJobId(null); setDurum(null); }}>
          Temizle
        </Button>
      </Box>

      {jobId && (
        <Box mt={2}>
          <Typography>Job ID: {jobId} — Durum: {durum}</Typography>
        </Box>
      )}

      <Paper variant="outlined" sx={{ mt: 2, p: 2, whiteSpace: "pre-wrap" }}>
        <Typography variant="subtitle1">Çıktı:</Typography>
        <Typography sx={{ fontFamily: "monospace" }}>{cikti || (calistir.isLoading ? "Komut gönderiliyor..." : "Çıktı bekleniyor...")}</Typography>
      </Paper>
    </Box>
  );
}
