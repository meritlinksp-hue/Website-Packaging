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
} else if (window.location.pathname === '/social-icons-preview') {
  import('./preview/SocialIconsPreview.jsx').then(({ default: SocialIconsPreview }) => {
    root.render(
      <React.StrictMode>
        <SocialIconsPreview />
      </React.StrictMode>
    )
  })
} else if (window.location.pathname === '/interaction-lab') {
  import('./preview/InteractionLab.jsx').then(({ default: InteractionLab }) => {
    root.render(
      <React.StrictMode>
        <InteractionLab />
      </React.StrictMode>
    )
  })
} else if (window.location.pathname === '/live-chat-preview') {
  import('./preview/LiveChatPreview.jsx').then(({ default: LiveChatPreview }) => {
    root.render(
      <React.StrictMode>
        <LiveChatPreview />
      </React.StrictMode>
    )
  })
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}