import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroesApp } from './HeroesApp.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <BrowserRouter>
     <HeroesApp />
     </BrowserRouter>
    
  </React.StrictMode>,
)
