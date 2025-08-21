import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function CrawlerHistoryTable({ rows }) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'url', headerName: 'URL', width: 300 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'foundUrls', headerName: 'Found URLs', width: 150 },
  ];

  return (
    <div style={{ height: 400, width: '100%', marginTop: '20px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
      />
    </div>
  );
}
