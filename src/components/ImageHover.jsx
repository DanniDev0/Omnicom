import React from 'react'
import '../assets/style/ImageHover.css'

export const ImageHover = ({ Image,Name,Title,Text }) => {
    return (
        <div>
            <div className="img-market ">
                <img src={Image} alt= {Name} />
                <div className="overlay">
                    <h3>{Title}</h3>
                    <p>{Text}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageHover;