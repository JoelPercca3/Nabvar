import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import vetorDorado from '../../assets/icons/vetorDorado.png'

export default function Dashboard() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#0B1929',
        color: 'white',
        p: { xs: 2, sm: 4 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1400px',
          position: 'relative',
          padding: { xs: '20px', sm: '40px 24px' },
          gap: '32px',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '2fr 1fr' },
            gap: '20px',
            mb: 4,
          }}
        >
          <Card
            sx={{
              bgcolor: 'rgba(255,255,255,0.03)',
              boxShadow: 'none',
              borderRadius: '16px',
              p: { xs: 3, sm: 5 },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              textAlign: { xs: 'center', sm: 'left' },
              minHeight: '200px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                component="img"
                src={vetorDorado}
                alt="KAU"
                sx={{ width: '50px', height: '50px' }}
              />
              <Typography variant="h5" sx={{ fontWeight: '500', color: 'white' }}>
                1 KAU
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: '500', color: 'white' }}>
              =
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                component="img"
                src={vetorDorado}
                alt="Gold"
                sx={{ width: '50px', height: '50px' }}
              />
              <Typography variant="h5" sx={{ fontWeight: '500', color: 'white' }}>
                1 gram of gold
              </Typography>
            </Box>
          </Card>

          <Card
            sx={{
              bgcolor: 'rgba(255,255,255,0.03)',
              boxShadow: 'none',
              borderRadius: '16px',
              p: { xs: 3, sm: 5 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              minHeight: '200px',
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: '500', color: 'white' }}>
              $0
            </Typography>
            <Typography variant="body1" sx={{ color: 'white' }}>
              Storage fees
            </Typography>
          </Card>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: '32px',
            '& .metric-card': {
              bgcolor: 'rgba(255,255,255,0.03)',
              boxShadow: 'none',
              borderRadius: '16px',
              p: { xs: 4, sm: 5 },
              textAlign: 'center',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            },
          }}
        >
          <Card className="metric-card">
            <Typography sx={{ mb: 2, fontSize: '1.5rem' }}>Redemption</Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: '500', mb: 2, color: '#B8860B' }}
            >
              100
            </Typography>
            <Typography>grams min.</Typography>
          </Card>

          <Card className="metric-card">
            <Box
              sx={{
                color: '#3399FF',
                fontSize: '2.5rem',
                mb: 2,
                '&::before': { content: '"⚡"', fontSize: '3rem' },
              }}
            />
            <Typography sx={{ mb: 2, fontSize: '1.5rem' }}>Transaction Speed</Typography>
            <Typography variant="h2" sx={{ fontWeight: '500', mb: 2 }}>
              2-3
            </Typography>
            <Typography>Seconds</Typography>
          </Card>

          <Card className="metric-card">
            <Typography sx={{ mb: 2, fontSize: '1.5rem' }}>Divisibility</Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: '500', mb: 2, color: '#B8860B' }}
            >
              0.00001
            </Typography>
            <Typography>KAU</Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
