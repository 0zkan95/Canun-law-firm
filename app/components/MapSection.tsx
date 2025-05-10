import React from 'react';

const MapSection = () => {
  // IMPORTANT: Replace the src attribute below with the embed code from Google Maps for your address!
  const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322813!2d106.8195613735607!3d-6.194741393792418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1630448091703!5m2!1sen!2sid"; // Example: Jakarta National Monument

  return (
    <section className="w-full bg-white"> {/* No vertical padding needed if map is full width */}
      <div className="w-full h-80 md:h-96"> {/* Map container height */}
        <iframe
          src={mapEmbedSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false} // Changed from true for potentially better compatibility/less intrusive
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
