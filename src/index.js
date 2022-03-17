import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'normalize.css'
import './index.scss'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { AiOutlineClose } from 'react-icons/ai'

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 8000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
}

const AlertTemplate = ({ style, options, message, close }) => {
  return (
    <div className={`${options.type} alert`}>
      <div className='content'>
        {options.type === 'error' && 'Error: '}
        {message}
      </div>
      <button className='close-alert-btn btn'>
        <AiOutlineClose className='icon' />
      </button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
