import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/primaryStyle.css'
import App from './primaryPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
