import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ProductContext from './contexts/ProductContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContext>
        <App/>
      </ProductContext>
    </BrowserRouter>
  </React.StrictMode>
)
