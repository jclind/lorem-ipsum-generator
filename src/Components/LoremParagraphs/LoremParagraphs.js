import React from 'react'
import './LoremParagraphs.scss'

import { BiCopy, BiCheck } from 'react-icons/bi'

const LoremParagraphs = ({ loremP, handleCopyText, isCopied }) => {
  return (
    <div
      className='lorem-paragraphs'
      onClick={() => handleCopyText(loremP.join('\n'))}
    >
      <div className='copy-overlay'>
        {!isCopied ? (
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
      {loremP.map((text, idx) => {
        return (
          <p className='lorem-paragraph' key={idx}>
            {text}
          </p>
        )
      })}
    </div>
  )
}

export default LoremParagraphs
