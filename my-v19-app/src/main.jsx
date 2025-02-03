import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostForm from './PostForm.jsx'
import LikeButton from './LikeButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LikeButton />
  </StrictMode>,
)
