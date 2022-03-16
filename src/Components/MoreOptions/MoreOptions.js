import React, { useState } from 'react'
import Collapsible from 'react-collapsible'
import './MoreOptions.scss'
import { AiOutlineCaretDown, AiFillCaretUp } from 'react-icons/ai'

const MoreOptions = ({
  loremUnit,
  setLoremUnit,
  paragraphLowerBound,
  setParagraphLowerBound,
  paragraphUpperBound,
  setParagraphUpperBound,
  sentenceLowerBound,
  setSentenceLowerBound,
  sentenceUpperBound,
  setSentenceUpperBound,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const [unitType, setUnitType] = useState(loremUnit)

  const [minSPerP, setMinSPerP] = useState(paragraphLowerBound)
  const [maxSPerP, setMaxSPerP] = useState(paragraphUpperBound)
  const [minWPerS, setMinWPerS] = useState(sentenceLowerBound)
  const [maxWPerS, setMaxWPerS] = useState(sentenceUpperBound)

  const validateNum = (num, setNum) => {
    if (num === '') return setNum('')
    if (num && (isNaN(num) || Number(num) % 1 !== 0)) return
    if (num === '0') return
    if (Number(num) >= 100 || Number(num) <= 0) return
    return setNum(num)
  }

  return (
    <div className='more-options'>
      <Collapsible
        trigger={
          <div className='collapsible-trigger'>
            <div className='text'>More Options</div>
            <AiOutlineCaretDown className='icon' />
          </div>
        }
        triggerWhenOpen={
          <div className='collapsible-trigger'>
            <div className='text'>More Options</div>
            <AiFillCaretUp className='icon' />
          </div>
        }
      >
        <div className='settings-container'>
          <div className='lorem-units'>
            <div className='title'>Lorem Unit:</div>
            <div className='options'>
              <button
                className={
                  unitType === 'paragraph' ? 'option active btn' : 'option btn'
                }
                onClick={() => setUnitType('paragraph')}
              >
                Paragraphs
              </button>
              <button
                className={
                  unitType === 'sentence' ? 'option active btn' : 'option btn'
                }
                onClick={() => setUnitType('sentence')}
              >
                Sentences
              </button>
              <button
                className={
                  unitType === 'word' ? 'option active btn' : 'option btn'
                }
                onClick={() => setUnitType('word')}
              >
                Words
              </button>
            </div>
          </div>
          <div className='setting-inputs'>
            <label className='setting-label'>
              <div className='text'>Sentences Per Paragraph:</div>
              <div className='min-max-container'>
                <label className='min-s-per-p min-max-item'>
                  <div className='text'>Min:</div>
                  <input
                    type='text'
                    value={minSPerP}
                    onChange={e => validateNum(e.target.value, setMinSPerP)}
                    onBlur={() => {
                      if (!minSPerP) {
                        setMinSPerP(paragraphLowerBound)
                      }
                    }}
                  />
                </label>
                <label className='max-s-per-p min-max-item'>
                  <div className='text'>Max:</div>
                  <input
                    type='text'
                    value={maxSPerP}
                    onChange={e => validateNum(e.target.value, setMaxSPerP)}
                    onBlur={() => {
                      if (!maxSPerP) {
                        setMaxSPerP(paragraphUpperBound)
                      }
                    }}
                  />
                </label>
              </div>
            </label>
            <label className='setting-label'>
              <div className='text'>Words Per Sentence:</div>
              <div className='min-max-container'>
                <label className='min-s-per-p min-max-item'>
                  <div className='text'>Min:</div>
                  <input
                    type='text'
                    value={minWPerS}
                    onChange={e => validateNum(e.target.value, setMinWPerS)}
                    onBlur={() => {
                      if (!minWPerS) {
                        setMinWPerS(sentenceLowerBound)
                      }
                    }}
                  />
                </label>
                <label className='max-s-per-p min-max-item'>
                  <div className='text'>Max:</div>
                  <input
                    type='text'
                    value={maxWPerS}
                    onChange={e => validateNum(e.target.value, setMaxWPerS)}
                    onBlur={() => {
                      if (!maxWPerS) {
                        setMaxWPerS(sentenceUpperBound)
                      }
                    }}
                  />
                </label>
              </div>
            </label>
          </div>
          <div className='controls'>
            <button className='save-changes-btn btn'>Save Changes</button>
          </div>
        </div>
      </Collapsible>
    </div>
  )
}

export default MoreOptions
