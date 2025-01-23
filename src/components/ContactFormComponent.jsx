import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/style/ContactFormComponent.css';
import Button from '../components/Button';

const ContactFormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let formErrors = {};

        if (!formData.name.trim()) {
            formErrors.name = 'Name is required';
        } else if (formData.name.length < 2) {
            formErrors.name = 'Name must be at least 2 characters';
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            formErrors.name = 'Name can only contain letters';
        }

        if (!formData.lastName.trim()) {
            formErrors.lastName = 'Last Name is required';
        } else if (formData.lastName.length < 2) {
            formErrors.lastName = 'Last Name must be at least 2 characters';
        } else if (!/^[A-Za-z\s]+$/.test(formData.lastName)) {
            formErrors.lastName = 'Last Name can only contain letters';
        }

        if (!formData.phone.trim()) {
            formErrors.phone = 'Phone is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            formErrors.phone = 'Phone must be a valid 10-digit number';
        }

        if (!formData.email.trim()) {
            formErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            formErrors.email = 'Email must be a valid email address';
        }

        if (!formData.message.trim()) {
            formErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            formErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully:', formData);
            alert('Form submitted successfully!');
            setFormData({
                name: '',
                lastName: '',
                phone: '',
                email: '',
                message: ''
            });
            setErrors({});
        }
    };

    return (
        <div className="contact-us">
            <h2>we call you?</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="input-container">
                        <i className="fas fa-user"></i>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            aria-describedby="nameError"
                        />
                        {errors.name && <span id="nameError" className="error-message">{errors.name}</span>}
                    </div>
                    <div className="input-container">
                        <i className="fas fa-user-tag"></i>
                        <input 
                            type="text" 
                            id="last-name" 
                            name="lastName" 
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            aria-describedby="lastNameError"
                        />
                        {errors.lastName && <span id="lastNameError" className="error-message">{errors.lastName}</span>}
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <i className="fas fa-phone-alt"></i>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            aria-describedby="phoneError"
                        />
                        {errors.phone && <span id="phoneError" className="error-message">{errors.phone}</span>}
                    </div>
                    <div className="input-container">
                        <i className="fas fa-envelope"></i>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            aria-describedby="emailError"
                        />
                        {errors.email && <span id="emailError" className="error-message">{errors.email}</span>}
                    </div>
                </div>
                <div className="input-container full-width">
                    <i className="fas fa-comment-alt"></i>
                    <input 
                        type="text" 
                        id="message" 
                        name="message" 
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        aria-describedby="messageError"
                    />
                    {errors.message && <span id="messageError" className="error-message">{errors.message}</span>}
                </div>
                <Button text="Submit" />
            </form>
        </div>
    );
};

export default ContactFormComponent;