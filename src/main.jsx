import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import BuddyPage from './pages/BuddyPage.tsx'

// BrowserRouter — wraps the entire app to enable URL-based routing
// Routes      — container for all your Route definitions
// Route       — maps a URL path to a component
//   path="/"       → when URL is "localhost:5173/",      render <App />
//   path="/buddy"  → when URL is "localhost:5173/buddy", render <BuddyPage />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/buddy" element={<BuddyPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
