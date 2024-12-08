import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Rating } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'The ambiance and food were exceptional. A perfect blend of flavors!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    name: 'Michael Chen',
    rating: 5,
    comment: 'Outstanding service and incredible menu selection. Will definitely return!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    name: 'Emily Davis',
    rating: 5,
    comment: 'The chefs special was a revelation. Truly a memorable dining experience.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
];

const ReviewsSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          What Our Guests Say
        </Typography>
        <Swiper
          style={{padding: '10px 0'}}
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Card sx={{ height: '100%', minHeight: 300 }}>
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
                  <Avatar
                    src={review.avatar}
                    sx={{ width: 80, height: 80, mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {review.name}
                  </Typography>
                  <Rating value={review.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body1" color="text.secondary" align="center">
                    "{review.comment}"
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default ReviewsSection;