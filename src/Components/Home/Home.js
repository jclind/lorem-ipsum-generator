import React, { useState, useEffect } from 'react'
import './Home.scss'
import LoremParagraphs from '../LoremParagraphs/LoremParagraphs'
import Shortcuts from '../Shortcuts'
import { loremIpsum } from 'lorem-ipsum'

const Home = () => {
  const [loremP, setLoremP] = useState([])
  const [paragraphCount, setParagraphCount] = useState(1)

  const [paragraphLowerBound, setParagraphLowerBound] = useState(5)
  const [paragraphUpperBound, setParagraphUpperBound] = useState(8)
  const [sentenceLowerBound, setSentenceLowerBound] = useState(5)
  const [sentenceUpperBound, setSentenceUpperBound] = useState(15)

  useEffect(() => {
    setLoremText(1)
  }, [])

  const setLoremText = c => {
    // const lorem = new LoremIpsum({
    //   sentencesPerParagraph: {
    //     max: maxSPerP,
    //     min: minSPerP,
    //   },
    //   wordsPerSentence: {
    //     max: maxWPerS,
    //     min: minWPerS,
    //   },
    // })
    let loremText = []
    let count = c || paragraphCount
    for (let i = 0; i < count; i++) {
      const text = loremIpsum({
        count: 1,
        format: 'plain',
        paragraphLowerBound: paragraphLowerBound,
        paragraphUpperBound: paragraphUpperBound,
        sentenceLowerBound: sentenceLowerBound,
        sentenceUpperBound: sentenceUpperBound,
        units: 'paragraphs',
        random: Math.random,
      })
      console.log(text)
      loremText.push(text)
    }
    setLoremP(loremText)
  }

  const handleParagraphCountChange = e => {
    const val = e.target.value

    if ((isNaN(val) || val <= 0 || val % 1 !== 0 || val > 100) && val !== '')
      return

    return setParagraphCount(val)
  }

  const handleGenerateText = c => {
    const count = !isNaN(c) ? c : paragraphCount
    setLoremText(count)
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
      <Shortcuts
        copy={handleCopyText}
        loremP={loremP}
        setPCount={setParagraphCount}
        generateText={handleGenerateText}
      />
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
