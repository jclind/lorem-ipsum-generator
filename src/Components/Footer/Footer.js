import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='shortcuts'>
        <div className='item'>
          <div className='key'>ctrl</div> + <div className='key'>c</div> - copy
          current lorem
        </div>
        <div className='item'>
          <div className='key'>alt</div> + <div className='key'>[number]</div> -
          generate [number] lorem paragraphs
        </div>
      </div>
    </footer>
  )
}

export default Footer
