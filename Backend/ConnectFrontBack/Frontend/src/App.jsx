import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  // const [count, setCount] = useState(0)
  //
  // return (
  //   <>
  //       <h1>Chai aur Connection</h1>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
    const [jokes, setJokes] = useState([])
    useEffect(() => {
        axios.get('/api/jokes')
            .then((response) => {
                setJokes(response.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    });
    return(
        <>
            <h1>Chai aur Jokes</h1>
            <p>JOKES: {jokes.length}</p>
            {
                jokes.map(joke => (
                    <div key={joke.id}>
                        <h3>{joke.title}</h3>
                        <p>{joke.content}</p>
                    </div>
                ))
            }
        </>
    )
}

export default App
