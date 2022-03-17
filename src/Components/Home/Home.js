import React, { useState, useEffect } from 'react'
import './Home.scss'
import MoreOptions from '../MoreOptions/MoreOptions'
import LoremParagraphs from '../LoremParagraphs/LoremParagraphs'
import Shortcuts from '../Shortcuts'
import { loremIpsum } from 'lorem-ipsum'

const Home = () => {
  const [loremP, setLoremP] = useState([])
  const [unitCount, setUnitCount] = useState(1)

  const [loremUnit, setLoremUnit] = useState('paragraph')
  useEffect(() => {
    if (loremUnit) {
      setUnitCount(1)
    }
  }, [loremUnit])

  // Add use effect to change paragraphCount (need to rename btw) to make more sense for each unit type

  const [paragraphLowerBound, setParagraphLowerBound] = useState(5)
  const [paragraphUpperBound, setParagraphUpperBound] = useState(8)
  const [sentenceLowerBound, setSentenceLowerBound] = useState(5)
  const [sentenceUpperBound, setSentenceUpperBound] = useState(15)

  const setLoremText = (c, type, minSPerP, maxSPerP, minWPerS, maxWPerS) => {
    console.log(type, minSPerP, maxSPerP, minWPerS, maxWPerS)
    let loremText = []
    let count = Number(c) ? c : unitCount
    console.log(Number(c), c, unitCount, count)
    for (let i = 0; i < count; i++) {
      const text = loremIpsum({
        count: 1,
        format: 'plain',
        paragraphLowerBound: minSPerP || paragraphLowerBound,
        paragraphUpperBound: maxSPerP || paragraphUpperBound,
        sentenceLowerBound: minWPerS || sentenceLowerBound,
        sentenceUpperBound: maxWPerS || sentenceUpperBound,
        units: type || loremUnit,
        random: Math.random,
      })
      console.log({
        count: 1,
        format: 'plain',
        paragraphLowerBound: minSPerP || paragraphLowerBound,
        paragraphUpperBound: maxSPerP || paragraphUpperBound,
        sentenceLowerBound: minWPerS || sentenceLowerBound,
        sentenceUpperBound: maxWPerS || sentenceUpperBound,
        units: type || loremUnit,
        random: Math.random,
      })
      loremText.push(text)
    }
    setLoremP(loremText)
  }

  useEffect(() => {
    setLoremText(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleUnitCountChange = e => {
    const val = e.target.value

    if ((isNaN(val) || val <= 0 || val % 1 !== 0 || val > 100) && val !== '')
      return

    return setUnitCount(val)
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
        setUnitCount={setUnitCount}
        generateText={setLoremText}
      />
      <div className='content-container'>
        <div className='inputs-container'>
          <div className='main-inputs'>
            <label htmlFor='' className='paragraph-count-label'>
              <div className='text'>{loremUnit}s:</div>
              <input
                type='number'
                className='paragraph-count-input input'
                value={unitCount}
                onChange={handleUnitCountChange}
                onBlur={e => {
                  if (e.target.value === '') {
                    setUnitCount(1)
                  }
                }}
              />
            </label>
            <button className='generate-btn btn' onClick={() => setLoremText()}>
              Generate Lorem Ipsum
            </button>
          </div>
          <MoreOptions
            loremUnit={loremUnit}
            setLoremUnit={setLoremUnit}
            paragraphLowerBound={paragraphLowerBound}
            setParagraphLowerBound={setParagraphLowerBound}
            paragraphUpperBound={paragraphUpperBound}
            setParagraphUpperBound={setParagraphUpperBound}
            sentenceLowerBound={sentenceLowerBound}
            setSentenceLowerBound={setSentenceLowerBound}
            sentenceUpperBound={sentenceUpperBound}
            setSentenceUpperBound={setSentenceUpperBound}
            setLoremText={setLoremText}
          />
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
