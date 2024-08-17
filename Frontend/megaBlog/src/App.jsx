import { useState,useEffect } from 'react'
import './App.css'
import {useDispatch} from "react-redux";
import authService from './appwrite/auth.js';
import {login,logout} from './store/authSlice.js';
import {Footer, Header} from "./components/index.js";
import {Outlet} from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        authService.getCurrentUser()
            .then((userData)=>{
                if(userData){
                    dispatch(login({userData}))
                }else{
                    dispatch(logout())
                }
            })
            .finally(() => setLoading(false))
    }, []);
    // console.log(process.env.REACT_APP_APPWRITE_URL);
    console.log(import.meta.env.VITE_APPWRITE_URL);

  return !loading ? (
      <div className={'min-h-screen flex flex-wrap content-between bg-gray-500'}><div className={'w-full block'}>
            <Header/>
          <main>
              TODO:{/*<Outlet/>*/}
          </main>
          <Footer/>
      </div></div>
  ) : null;
}

export default App
