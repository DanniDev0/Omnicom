import React from 'react'
import Title from '../components/Title';
import '../assets/style/Contact_us.css';
import MapComponent from '../components/MapComponent';
import ContactFormComponent from '../components/ContactFormComponent';
import InfoCardComponent from '../components/InfoCardComponent';
import addressIcon from '../assets/img/addressIcon.png';
import phoneIcon from '../assets/img/phoneIcon.png';
import emailIcon from '../assets/img/emailIcon.png';
import hoursIcon from '../assets/img/opening-hoursIcon.png';

export const Contact_us = () => {
    return (
        <div>
            <section className='animate-container'>
                <Title text="CONTACT US" />
                <div className="container">
                    <MapComponent />
                    <ContactFormComponent />
                </div>
            </section>
            <section>
                <div className="info-company">
                    <InfoCardComponent icon={addressIcon} title="Address" content="PO BOX 2734, WOODBRIDGE, VA, 22195" />
                    <InfoCardComponent icon={phoneIcon} title="Phone" content="+1 5712788712" />
                    <InfoCardComponent icon={emailIcon} title="Email" content="info@omnicomcr.com" />
                    <InfoCardComponent icon={hoursIcon} title="Opening Hours" content="Monday - Friday: 9:00 AM - 6:00 PM" />
                </div>
            </section>
        </div>
    )
}

export default Contact_us;