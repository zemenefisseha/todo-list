import { useState } from 'react'
import './App.css'
import Todolist from './components/Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Todolist />
      </div>
     
    </>
  )
}

export default App
