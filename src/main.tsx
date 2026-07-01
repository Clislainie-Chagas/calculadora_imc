import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Calculadora from './usuario/calculadora/page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />,
    <Calculadora />
  </StrictMode>,
)
