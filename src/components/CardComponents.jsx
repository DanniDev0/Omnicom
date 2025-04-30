import React from 'react'
import '../assets/style/CardComponents.css'

const CardComponents = ({ Image,Title,Text }) => {
  return (
    <div>
        <div className="Card">
            <img src={Image} alt='Certificate' className = 'CardImage'/>
            <h5 className='Certificate_Title'>{Title}</h5>
            <p className='CardText'>{Text}</p>
        </div>
    </div>
  )
}

export default CardComponents