import React from 'react'
import '../assets/style/ServiceCard.css'
import Button from '../components/Button';

export const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="service-card animate__animated animate__flipInX">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="service-footer">
        <img src={image} alt={title} />
        <Button text="Order" />
      </div>
    </div>
  )
}

export default ServiceCard;