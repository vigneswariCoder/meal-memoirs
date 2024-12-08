import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider,
} from '@mui/material';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        pt: 8,
        pb: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Playfair Display' }}>
              Meal Memoirs
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Experience the art of fine dining in an atmosphere of elegance and sophistication.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" size="small">
                <Facebook size={20} />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Instagram size={20} />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Twitter size={20} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Hours
            </Typography>
            <Typography variant="body2">
              Monday - Friday: 11:30 AM - 10:00 PM
            </Typography>
            <Typography variant="body2">
              Saturday - Sunday: 10:00 AM - 11:00 PM
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Newsletter
            </Typography>
            <Box component="form" sx={{ display: 'flex', gap: 1 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Your email"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{ whiteSpace: 'nowrap' }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Meal Memoirs. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;