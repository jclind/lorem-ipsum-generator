import React, { useState, useEffect } from 'react'
import './LoremParagraphs.scss'

import { BiCopy, BiCheck } from 'react-icons/bi'

const LoremParagraphs = ({ loremP }) => {
  const [isCoppied, setIsCoppied] = useState(false)

  const handleCopyText = () => {
    navigator.clipboard.writeText(loremP)
    setIsCoppied(true)
    setTimeout(() => {
      setIsCoppied(false)
    }, 3000)
  }

  return (
    <div className='lorem-paragraphs' onClick={handleCopyText}>
      {/* <button className='copy-btn btn' onClick={handleCopyText}>
        {!isCoppied ? (
          <>
            <BiCopy className='icon' />
            Copy Text
          </>
        ) : (
          <>
            <BiCheck className='icon' />
            Text Copied
          </>
        )}
      </button> */}
      <div className='copy-overlay'>
        {!isCoppied ? (
          <>
            <BiCopy className='icon' />
            Copy Text
          </>
        ) : (
          <>
            <BiCheck className='icon' />
            Text Copied
          </>
        )}
      </div>
      <p className='lorem-paragraph'>
        {loremP.map(text => {
          return <p>{text}</p>
        })}
      </p>
    </div>
  )
}

export default LoremParagraphs
