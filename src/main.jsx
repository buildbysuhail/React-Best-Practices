import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import darkModeReducer from './darkModeSlice'
import './index.css'
import App from './App.jsx'

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
