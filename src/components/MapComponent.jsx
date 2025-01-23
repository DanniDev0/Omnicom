import React from 'react';
import '../assets/style/MapComponent.css';

const MapComponent = () => {
    return (
        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.457343231826!2d-77.3273365848177!3d38.6358787796165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6f6ec03f0e4a5%3A0x651d5f6a27b4b3e8!2sWoodbridge%2C%20VA%2022195%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1691778589308!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
            ></iframe>
        </div>
    );
};

export default MapComponent;
