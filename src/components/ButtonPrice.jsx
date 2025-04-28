import React from 'react'
import '../assets/style/ButtonPrice.css'

const ButtonPrice = ( { Text, page } ) => {
  return (
    <div className='btn-price'>
        <a href={page}>
          <span>{Text}</span>
        </a>    
    </div>
  )
}

export default ButtonPrice;