import React from 'react';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import LocationMap from '../components/LocationMap';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Contact />
      <FAQ />
      <LocationMap />
    </div>
  );
};

export default ContactPage;