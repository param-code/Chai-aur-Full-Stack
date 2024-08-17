import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [counter,SetCounter] = useState(5);
    // let count = 5;
    function addValue(){SetCounter(counter+1)}
    const removeValue = () => {SetCounter(counter-1)}
  return (
    <>
      <h1>Chai aur react</h1>
        <h3>Counter Value: {counter}</h3>
        <button onClick={addValue}>Increase</button>
        <br />
        <button onClick={removeValue}>Decrease</button>
    </>
  )
}

export default App
