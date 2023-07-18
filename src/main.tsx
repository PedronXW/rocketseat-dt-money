import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './App.tsx'
import { TransactionsProvider } from './contexts/TransactionsContext.tsx'
import { GlobalStyles } from './styles/globals.ts'
import { defaultTheme } from './styles/themes/default'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TransactionsProvider>
        <App />
      </TransactionsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
