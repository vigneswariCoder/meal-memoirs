import React from 'react';
import { Box, Container, Typography, ImageList, ImageListItem } from '@mui/material';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    title: 'Restaurant Interior',
  },
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    title: 'Fine Dining',
  },
  {
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    title: 'Signature Dish',
  },
  {
    img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
    title: 'Fresh Salad',
  },
  {
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
    title: 'Cocktail Bar',
  },
  {
    img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2',
    title: 'Private Events',
  },
];

const GallerySection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Our Gallery
        </Typography>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ImageList
            variant="quilted"
            cols={3}
            rowHeight={300}
            gap={16}
            sx={{
              '@media (max-width: 600px)': {
                cols: 1,
              },
            }}
          >
            {galleryItems.map((item, index) => (
              <ImageListItem
                key={index}
                cols={index % 3 === 0 ? 2 : 1}
                rows={index % 3 === 0 ? 2 : 1}
              >
                <img
                  src={`${item.img}?w=600&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </motion.div>
      </Container>
    </Box>
  );
};

export default GallerySection;