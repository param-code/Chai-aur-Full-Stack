import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value,setValue] = useState(1);

  const clickMe = () => {
    console.log("logged")}

  return (
    <>
      <h1>Main Value: {value}</h1>
        <button onClick={()=>(setValue(value*5))}>Click to Multiply by 5</button>
        <h2>Multiplied Value:{value*5} </h2>
    </>
  )
}

export default App
