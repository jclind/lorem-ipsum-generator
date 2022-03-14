import React, { useState, useEffect } from 'react'
import './Home.scss'
import LoremParagraphs from '../LoremParagraphs/LoremParagraphs'
import Shortcuts from '../Shortcuts'
import { LoremIpsum } from 'lorem-ipsum'

const Home = () => {
  const [loremP, setLoremP] = useState([])
  const [paragraphCount, setParagraphCount] = useState(1)
  useEffect(() => {
    setLoremText()
  }, [])

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 5,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  })

  const setLoremText = () => {
    let loremText = []
    let count = paragraphCount || 1
    for (let i = 0; i < count; i++) {
      loremText.push(lorem.generateParagraphs(1))
    }
    setLoremP(loremText)
  }

  const handleParagraphCountChange = e => {
    const val = e.target.value

    if ((isNaN(val) || val <= 0 || val % 1 !== 0 || val > 100) && val !== '')
      return

    return setParagraphCount(val)
  }

  const handleGenerateText = () => {
    setLoremText()
  }

  const [isCopied, setIsCopied] = useState(false)
  const handleCopyText = text => {
    navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  return (
    <div className='home-page page'>
      <Shortcuts copy={handleCopyText} loremP={loremP} />
      <div className='content-container'>
        <div className='inputs-container'>
          <label htmlFor='' className='paragraph-count-label'>
            <div className='text'>Paragraphs:</div>
            <input
              type='number'
              className='paragraph-count-input input'
              value={paragraphCount}
              onChange={handleParagraphCountChange}
              onBlur={e => {
                if (e.target.value === '') {
                  setParagraphCount(1)
                }
              }}
            />
          </label>
          <button className='generate-btn btn' onClick={handleGenerateText}>
            Generate Lorem Ipsum
          </button>
        </div>
        <div className='lorem-container'>
          <LoremParagraphs
            loremP={loremP}
            isCopied={isCopied}
            handleCopyText={handleCopyText}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
