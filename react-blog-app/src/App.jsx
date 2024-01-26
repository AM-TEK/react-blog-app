import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
