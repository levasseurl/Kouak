import { useState } from 'react'
import './App.css'
import Chat from './screens/Chat'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Chat></Chat>
    </>
  )
}

export default App
