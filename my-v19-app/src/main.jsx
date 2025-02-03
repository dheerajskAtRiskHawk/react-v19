import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostForm from './PostForm.jsx'
import PostForm2 from './POForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostForm2 />
  </StrictMode>,
)
