import React from 'react'
import './Footer.scss'

import { MdMail, MdCode } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'
import { FaDonate } from 'react-icons/fa'

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
      <div className='bottom-footer'>
        <div className='links'>
          <a href='mailto:jesselindcs@gmail.com' className='item'>
            <MdMail className='icon' /> Contact
          </a>
          <a
            href='https://github.com/jclind/lorem-ipsum-generator'
            target='_blank'
            rel='noopener noreferrer'
            className='item'
          >
            <MdCode className='icon' /> Github
          </a>
          <a
            href='https://twitter.com/jclind02'
            target='_blank'
            rel='noopener noreferrer'
            className='item'
          >
            <BsTwitter className='icon' /> Twitter
          </a>
          <a
            href='https://www.buymeacoffee.com/jesseclind'
            target='_blank'
            rel='noopener noreferrer'
            className='item'
          >
            <FaDonate className='icon' /> Donate
          </a>
        </div>
        <div className='copyright'>
          © {new Date().getFullYear()} || Jesse Lind
        </div>
      </div>
    </footer>
  )
}

export default Footer
