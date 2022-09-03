import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalThemeProvider } from "./Theme/GlobalTheme"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalThemeProvider>
      <App />
    </GlobalThemeProvider>
  </React.StrictMode>
)
