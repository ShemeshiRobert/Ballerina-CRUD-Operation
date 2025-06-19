import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Search from './components/Search'
import Result from './components/Result'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Search/>
    </>    
  </StrictMode>
)
