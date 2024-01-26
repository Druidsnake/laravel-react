import React from 'react'
import { createRoot } from 'react-dom/client'
import MainRoute from './routes/MainRoute'

const App = () => {
    return (
        <React.StrictMode>
            <MainRoute />
        </React.StrictMode>
    )
}

export default App

createRoot(document.getElementById('react')).render(<App />)
