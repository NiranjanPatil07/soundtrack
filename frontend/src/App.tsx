import React, { Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './routes'
import LoadingSpinner from './components/loader/LoadingSpinner'
import { ThemeProvider } from './components/theme-provider'
import Layout from './components/Layout'

export const App: React.FC = () => {
  return (
    <AnimatePresence mode='wait'>
      <Suspense fallback={<LoadingSpinner />}>
        <ThemeProvider defaultTheme='dark' storageKey='soundtrack-ui-theme'>
          {/* <Layout> */}
          <RouterProvider router={router} />
          {/* </Layout> */}
        </ThemeProvider>
      </Suspense>
    </AnimatePresence>
  )
}

export default App
