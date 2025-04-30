import React from 'react'
import '../assets/style/CardMarket.css';

export const CardMarket = ({ Icon,Name,Title,Text }) => {
    return (
        <div>
            <div className="three-columns">
                <div className="column">
                    <img src={Icon} alt={Name} />
                    <h2>{Title}</h2>
                    <p>{Text}</p>
                </div>
            </div>
        </div>
    )
}

export default CardMarket;