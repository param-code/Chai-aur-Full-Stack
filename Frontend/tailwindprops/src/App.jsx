import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx';

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    name:'username',
    age:21
  }
  return (
    <>
      <h1 className={'bg-green-800 text-black p-4 rounded-xl'}>TailWind Test</h1>
        <Card channel='chaiAurCode' buttontxt='click here' />
    </>
  )
}

export default App
