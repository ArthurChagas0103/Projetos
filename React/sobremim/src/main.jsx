import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Waves from './components/Waves.jsx'
import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Waves />
  </React.StrictMode>,
)
