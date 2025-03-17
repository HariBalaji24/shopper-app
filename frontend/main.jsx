import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import Shopcontextprovider from './context/ShopContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shopcontextprovider>
      <App />
    </Shopcontextprovider>
    
  </StrictMode>,
)
