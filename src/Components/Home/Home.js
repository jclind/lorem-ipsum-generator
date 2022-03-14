import React, { useState, useEffect } from 'react'
import './Home.scss'
import LoremParagraphs from '../LoremParagraphs/LoremParagraphs'
import { LoremIpsum } from 'lorem-ipsum'

const Home = () => {
  const [loremP, setLoremP] = useState([])
  const [paragraphCount, setParagraphCount] = useState(1)

  const [generateCount, setGenerateCount] = useState(0)
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
    console.log(paragraphCount)
    for (let i = 0; i < paragraphCount; i++) {
      loremText.push(lorem.generateParagraphs(1))
    }
    console.log(loremText)
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

  return (
    <div className='home-page page'>
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
          <LoremParagraphs loremP={loremP} />
        </div>
      </div>
    </div>
  )
}

export default Home
