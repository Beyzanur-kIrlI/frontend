import React from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

export default function CrawlerHistory() {
  const { data, isLoading } = useQuery(["crawler-history"], async () => {
    const r = await api.get("/crawler/history");
    return r.data;
  });

  if (isLoading) return <Typography>Yükleniyor...</Typography>;

  return (
    <>
      <Typography variant="h5" gutterBottom>Crawler History</Typography>
      <List>
        {(data || []).map((h) => (
          <ListItem key={h.id || h.job_id}>
            <ListItemText
              primary={`ID: ${h.id || h.job_id} — ${h.created_at || h.started_at || ""}`}
              secondary={`Bulunan URL: ${h.output || h.found_urls_count || '-'} — Durum: ${h.status || h.durum || '-'}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
