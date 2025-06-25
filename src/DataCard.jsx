import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function DataCard() {
  return (
    <Card>
      <CardContent sx={{ pt: 0 }}>
        <Typography>Data card placeholder</Typography>
      </CardContent>
    </Card>
  );
}