import React from 'react';
import '../assets/style/Title.css';

export const Title = ({ text }) => {
    return (
        <h1 className="title-container animate__animated animate__pulse">
            {text}
        </h1>
    );
}

export default Title;