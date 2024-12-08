import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import AboutSection from './components/About/AboutSection';
import MenuSection from './components/Menu/MenuSection';
import GallerySection from './components/Gallery/GallerySection';
import ReviewsSection from './components/Reviews/ReviewsSection';
import EventsSection from './components/Events/EventsSection';
import ReservationSection from './components/Reservation/ReservationSection';
import ContactSection from './components/Contact/ContactSection';

function App() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ReviewsSection />
      <EventsSection />
      <ReservationSection />
      <ContactSection />
    </Layout>
  );
}

export default App;