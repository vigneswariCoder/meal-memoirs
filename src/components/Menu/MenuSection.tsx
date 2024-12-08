import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const menuItems = [
  {
    name: "Rock & Roll Tacos",
    description: "Crispy shells loaded with funky fusion fillings",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80",
    category: "Chef's Special"
  },
  {
    name: "Mojito Madness",
    description: "Our signature drink with a twist of funk",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80",
    category: "Drinks"
  },
  {
    name: "Groovy Garden Pizza",
    description: "Fresh veggies on our famous funky crust",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80",
    category: "Popular"
  },
];

const MenuSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Typography variant="h2" align="center" sx={{ mb: 6 }}>
        Our Funky Menu
      </Typography>
      <Grid container spacing={4} sx={{ px: { xs: 2, md: 8 } }}>
        {menuItems.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card sx={{ height: '100%', position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Chip
                    label={item.category}
                    color="primary"
                    size="small"
                    sx={{ position: 'absolute', top: 16, right: 16 }}
                  />
                  <Typography variant="h5" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {item.description}
                  </Typography>
                  <Typography variant="h6" color="primary.main">
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenuSection;