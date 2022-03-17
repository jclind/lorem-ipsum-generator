import React, { useEffect } from 'react'
import { useAlert } from 'react-alert'

const Shortcuts = ({ copy, loremP, setUnitCount, generateText }) => {
  const alert = useAlert()

  useEffect(() => {
    const handleShortcut = e => {
      if (e.ctrlKey) {
        if (e.key === 'c') {
          copy(loremP.join('\n'))
          alert.show('Lorem copied', { type: 'success', timeout: 3000 })
        }
      }
      if (e.altKey) {
        if (!isNaN(e.key) && Number(e.key) !== 0) {
          const num = Number(e.key)
          setUnitCount(num)
          generateText(num)
        }
      }
    }
    // attach the event listener
    document.addEventListener('keydown', handleShortcut)

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleShortcut)
    }
  }, [copy, loremP])
  return <div></div>
}

export default Shortcuts
