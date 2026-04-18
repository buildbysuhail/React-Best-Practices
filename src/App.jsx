import { useState, createContext } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from './darkModeSlice'

import { lazy, Suspense } from 'react'

const DarkModeContext = createContext()

const HomePage = lazy(() => import('./HomePage'))

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false)
  const isDarkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <>
    <DarkModeContext.Provider value={{ isDarkMode }}>
      <div className={isDarkMode ? 'dark' : 'light'}>
        <h1>Hello, World!</h1>
        <button onClick={() => dispatch(toggle())}>
          Toggle Dark Mode
        </button>
      </div>
      {/* OR any child components that need access to dark mode state */}
    </DarkModeContext.Provider>
    </>
  )
}

export default App
