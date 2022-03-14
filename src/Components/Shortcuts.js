import React, { useEffect } from 'react'

const Shortcuts = ({ copy, loremP }) => {
  useEffect(() => {
    const CTRL_C = e => {
      if (e.ctrlKey && e.key === 'c') {
        copy(loremP.join('\n'))
      }
    }
    // attach the event listener
    document.addEventListener('keydown', CTRL_C)

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', CTRL_C)
    }
  }, [copy, loremP])
  return <div></div>
}

export default Shortcuts
