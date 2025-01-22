import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContextComp } from './context/context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextComp>
      <App />
    </ContextComp>
  </React.StrictMode>
)
