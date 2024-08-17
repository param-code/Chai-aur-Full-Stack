import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import About from "./components/About/About.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import User from "./components/User/User.jsx";
import {Github, githubInfoLoader} from "./components/Github/Github.jsx";

const router = createBrowserRouter([
    { path: '/', element:<Layout/>,children:[{path:'',element:<Home/>},{path:'/about',element:<About/>},{path:'/contactus',element:<ContactUs/>},{path:'/user/:id',element:<User/>},{path:'/github',element:<Github/>,
        // loader=githubInfoLoader;
        }]},
])

// const routers = createBrowserRouter([
//     createRoutesFromElements(
//         <Route path='/' element={<Layout/>}>
//             <Route path={''} element={<Home/>}/>
//             <Route path={'/about'} element={<About/>}/>
//             <Route path={'contactus'} element={<ContactUs/>}/>
//         </Route>
//     )
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)