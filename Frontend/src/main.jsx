import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Search from './components/Search'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Search/>
    </>    
  </StrictMode>
)
