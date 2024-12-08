import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: 'Location',
    details: ['123 Gourmet Street', 'Foodie City, FC 12345'],
  },
  {
    icon: <Clock size={24} />,
    title: 'Hours',
    details: ['Mon-Fri: 11:30 AM - 10:00 PM', 'Sat-Sun: 10:00 AM - 11:00 PM'],
  },
  {
    icon: <Phone size={24} />,
    title: 'Contact',
    details: ['(555) 123-4567', 'info@mealmemoirs.com'],
  },
];

const ContactSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Find Us
        </Typography>
        <Grid container spacing={4}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {info.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {info.title}
                  </Typography>
                  {info.details.map((detail, idx) => (
                    <Typography key={idx} variant="body2" color="text.secondary">
                      {detail}
                    </Typography>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 6, height: '400px', borderRadius: 2, overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156744947!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1644836240008!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;