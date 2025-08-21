import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import CrawlerHistory from "./components/CrawlerHistory";
import Reports from "./Reports";
import NewCrawlerJob from "./NewCrawlerJob";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", p: 4 }}>
      <Container maxWidth="lg">
        {/* Başlık */}
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          🚀 Job Dashboard
        </Typography>

        <Divider sx={{ mb: 4, bgcolor: "secondary.main" }} />

        {/* Yeni Job Ekleme */}
        <Box sx={{ mb: 6 }}>
          <NewCrawlerJob />
        </Box>

        {/* Raporlar */}
        <Box sx={{ mb: 6 }}>
          <Reports />
        </Box>

        {/* Geçmiş Joblar */}
        <Box sx={{ mb: 6 }}>
          <CrawlerHistory />
        </Box>
      </Container>
    </Box>
  );
}
