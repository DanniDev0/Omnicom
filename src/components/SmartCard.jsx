import React from 'react'
import '../assets/style/SmartCard.css';

export const SmartCard = ({ Title, Solutions1, Text1, Solutions2, Text2 }) => {
    return (
        <div>
            <div className="smart-card">
                <h4>{Title}</h4>
                <p><strong>{Solutions1}</strong>{Text1}</p>
                <p><strong>{Solutions2}</strong>{Text2}</p>
            </div>
        </div>
    )
}

export default SmartCard;

