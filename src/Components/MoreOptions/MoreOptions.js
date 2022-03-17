import React, { useState, useEffect, useRef } from 'react'
import Collapsible from 'react-collapsible'
import './MoreOptions.scss'
import { AiOutlineCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useAlert } from 'react-alert'

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
  setLoremText,
}) => {
  const [isChanged, setIsChanged] = useState(false)

  const [unitType, setUnitType] = useState(loremUnit)

  const [minSPerP, setMinSPerP] = useState(paragraphLowerBound)
  const [maxSPerP, setMaxSPerP] = useState(paragraphUpperBound)
  const [minWPerS, setMinWPerS] = useState(sentenceLowerBound)
  const [maxWPerS, setMaxWPerS] = useState(sentenceUpperBound)

  const minSPerPRef = useRef()
  const maxSPerPRef = useRef()
  const minWPerSRef = useRef()
  const maxWPerSRef = useRef()

  const alert = useAlert()

  useEffect(() => {
    if (
      unitType !== loremUnit ||
      minSPerP !== paragraphLowerBound ||
      maxSPerP !== paragraphUpperBound ||
      minWPerS !== sentenceLowerBound ||
      maxWPerS !== sentenceUpperBound
    ) {
      setIsChanged(true)
    } else {
      setIsChanged(false)
    }
  }, [unitType, minSPerP, maxSPerP, minWPerS, maxWPerS])

  const saveChanges = () => {
    if (minSPerP !== paragraphLowerBound) {
      if (minSPerP > maxSPerP) {
        minSPerPRef.current.style.border = '1px solid #dc3545'
        maxSPerPRef.current.style.border = '1px solid #dc3545'
        return alert.show('The minimum cannot exceed the maximum', {
          type: 'error',
        })
      }
      setParagraphLowerBound(minSPerP)
    }
    if (maxSPerP !== paragraphUpperBound) {
      if (minSPerP > maxSPerP) {
        minSPerPRef.current.style.border = '1px solid #dc3545'
        maxSPerPRef.current.style.border = '1px solid #dc3545'
        return alert.show('The minimum cannot exceed the maximum', {
          type: 'error',
        })
      }
      setParagraphUpperBound(maxSPerP)
    }
    if (minWPerS !== paragraphLowerBound) {
      if (minWPerS > maxWPerS) {
        minWPerSRef.current.style.border = '1px solid #dc3545'
        maxWPerSRef.current.style.border = '1px solid #dc3545'
        return alert.show('The minimum cannot exceed the maximum', {
          type: 'error',
        })
      }
      setSentenceLowerBound(minWPerS)
    }
    if (maxWPerS !== paragraphLowerBound) {
      if (minWPerS > maxWPerS) {
        minWPerSRef.current.style.border = '1px solid #dc3545'
        maxWPerSRef.current.style.border = '1px solid #dc3545'
        return alert.show('The minimum cannot exceed the maximum', {
          type: 'error',
        })
      }
      setSentenceUpperBound(maxWPerS)
    }
    if (unitType !== loremUnit) {
      setLoremUnit(unitType)
      setIsChanged(false)
      return setLoremText(1, unitType)
    }

    setLoremText(null, unitType, minSPerP, maxSPerP, minWPerS, maxWPerS)
    setIsChanged(false)
  }

  const validateNum = (num, setNum) => {
    if (num === '') return setNum('')
    const currNum = Number(num)
    if (currNum && (isNaN(currNum) || currNum % 1 !== 0)) return
    if (currNum === '0') return
    if (currNum >= 100 || currNum <= 0) return
    return setNum(currNum)
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
                    type='number'
                    value={minSPerP}
                    onChange={e => {
                      validateNum(e.target.value, setMinSPerP)
                      minSPerPRef.current.style.border = 'none'
                      maxSPerPRef.current.style.border = 'none'
                    }}
                    ref={minSPerPRef}
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
                    type='number'
                    value={maxSPerP}
                    onChange={e => {
                      validateNum(e.target.value, setMaxSPerP)
                      maxSPerPRef.current.style.border = 'none'
                      minSPerPRef.current.style.border = 'none'
                    }}
                    ref={maxSPerPRef}
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
                    type='number'
                    value={minWPerS}
                    onChange={e => {
                      validateNum(e.target.value, setMinWPerS)
                      minWPerSRef.current.style.border = 'none'
                      maxWPerSRef.current.style.border = 'none'
                    }}
                    ref={minWPerSRef}
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
                    type='number'
                    value={maxWPerS}
                    onChange={e => {
                      validateNum(e.target.value, setMaxWPerS)
                      maxWPerSRef.current.style.border = 'none'
                      minWPerSRef.current.style.border = 'none'
                    }}
                    ref={maxWPerSRef}
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
            <button
              className={
                isChanged
                  ? 'save-changes-btn btn changed'
                  : 'save-changes-btn btn'
              }
              disabled={!isChanged}
              onClick={saveChanges}
            >
              Save Changes
            </button>
          </div>
        </div>
      </Collapsible>
    </div>
  )
}

export default MoreOptions
