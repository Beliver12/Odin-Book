import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GreetingContainer} from './Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GreetingContainer />
    <App/>
  </StrictMode>,
)
