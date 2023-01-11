import React from 'react'
import './style.css'

type Props = {
  children: React.ReactNode
}

function DefaultTemplate({ children }: Props) {
  return (
    <div>

      <nav>
        <ul>
          <li>Home</li>
          <li>Settings</li>
          <li>Documentation</li>
        </ul>
      </nav>

      {children}

      <footer>
        <ul>
          <li>About Us</li>
        </ul>
      </footer>
    </div>
  )
}

export default DefaultTemplate