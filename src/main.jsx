import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <BrowserRouter basename="/Most-Trending-Powerful">

  <StrictMode>
    <App />
  </StrictMode>,
  // </BrowserRouter>
)
