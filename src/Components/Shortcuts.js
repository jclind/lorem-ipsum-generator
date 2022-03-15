import React, { useEffect } from 'react'

const Shortcuts = ({ copy, loremP, setPCount, generateText }) => {
  useEffect(() => {
    const handleShortcut = e => {
      if (e.ctrlKey) {
        if (e.key === 'c') {
          copy(loremP.join('\n'))
        }
      }
      if (e.altKey) {
        if (!isNaN(e.key) && Number(e.key) !== 0) {
          const num = Number(e.key)
          setPCount(num)
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
