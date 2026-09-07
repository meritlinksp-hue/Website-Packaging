import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// Route แยกสำหรับ prototype: /animation-preview (โหลดแบบ dynamic →
// โค้ด preview ไม่ถูกแถมเข้า bundle ของเว็บไซต์จริงเลย)
if (window.location.pathname === '/animation-preview') {
  import('./preview/AnimationPreview.jsx').then(({ default: AnimationPreview }) => {
    root.render(<AnimationPreview />)
  })
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}