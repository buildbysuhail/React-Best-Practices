import { useState, createContext } from 'react'
import './App.css'

const DarkModeContext = createContext()

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <>
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className={isDarkMode ? 'dark' : 'light'}>
        <h1>Hello, World!</h1>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle Dark Mode
        </button>
      </div>
      {/* OR any child components that need access to dark mode state */}
    </DarkModeContext.Provider>
    </>
  )
}

export default App
