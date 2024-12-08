import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Calendar, Music, Utensils } from 'lucide-react';

const events = [
  {
    title: 'Jazz Night',
    date: 'Every Friday',
    description: 'Live jazz performances while you dine',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
    icon: <Music size={24} />,
  },
  {
    title: 'Culinary Workshop',
    date: 'First Saturday',
    description: 'Learn to cook gourmet dishes with our chefs!',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3',
    icon: <Calendar size={24} />,
  },
  {
    title: 'Cooking Class',
    date: 'Every Sunday',
    description: 'Learn from our master chefs',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d',
    icon: <Utensils size={24} />,
  },
];

const EventsSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Special Events
        </Typography>
        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={event.image}
                    alt={event.title}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      {event.icon}
                      <Typography variant="h6">{event.title}</Typography>
                    </Box>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {event.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {event.description}
                    </Typography>
                    <Button variant="outlined" color="primary">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EventsSection;