import React from 'react';
import './App.css';
import Home from './Components/HomeComponent/Home';
import About from './Components/AboutComponent/About';
import Contactus from './Components/ContactusComponent/Contactus';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Components/RootLayout/RootLayout';
import ErrorPage from './Components/ErrorPage/ErrorPage';
let routers = createBrowserRouter([
  {path:'/', element: <RootLayout/>, children:[
    {index:true, element: <Home/>},
    {path:'About', element: <About/>},
    {path:'Contact', element: <Contactus/>},
      ]},
    {path:'*', element: <ErrorPage/>}

])

function App() {
  return <React.Fragment>
   <RouterProvider router={routers}/>

</React.Fragment>
}

export default App;
