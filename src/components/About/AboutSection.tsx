import React from 'react';
import { Box, Container, Typography, Grid, Paper, IconButton } from '@mui/material';
import { Utensils, Music, Star, Coffee, Pizza, Martini } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Pizza size={32} />,
    title: "Gastronomic Fusion",
    description: "A unique blend of flavors to tantalize your taste buds.",
    color: "#6A994E"
  },
  {
    icon: <Music size={32} />,
    title: "Melodic Ambiance",
    description: "Immerse yourself in soothing music while you dine.",
    color: "#386641"
  },
  {
    icon: <Coffee size={32} />,
    title: "Brewed Bliss",
    description: "Indulge in premium artisanal coffee blends.",
    color: "#B5E48C"
  },
  {
    icon: <Star size={32} />,
    title: "Exceptional Chefs",
    description: "Culinary artists delivering award-winning dishes.",
    color: "#D9ED92"
  }
];

const AboutSection = () => {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: 'primary.main'
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ color: 'text.secondary', lineHeight: 1.8 }}
              >
                Discover the perfect blend of taste and elegance. At our restaurant, we create unforgettable experiences with every meal, featuring world-class cuisine, a warm ambiance, and exceptional service.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ color: 'text.secondary', lineHeight: 1.8 }}
              >
                Whether you're here for a casual dinner or a special occasion, we promise to make every visit extraordinary.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Paper
                      elevation={4}
                      sx={{
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: 2,
                        border: `2px solid ${feature.color}`,
                        bgcolor: 'background.paper',
                        '&:hover': {
                          boxShadow: `0 4px 20px ${feature.color}`,
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      <IconButton
                        sx={{
                          color: feature.color,
                          mb: 2,
                          '&:hover': {
                            bgcolor: 'transparent',
                          },
                        }}
                      >
                        {feature.icon}
                      </IconButton>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600, color: 'primary.main' }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '1rem' }}
                      >
                        {feature.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
