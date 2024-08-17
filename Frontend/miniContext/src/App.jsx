import { useState } from 'react'
import UserContextProvider from "./context/UserContextProvider.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React with Chai</h1>
        <Login/>
        <Profile/>
    </UserContextProvider>
  )
}

export default App
