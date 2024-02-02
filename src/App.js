import React, { lazy, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

// import Buy from './Components/Buy/Buy';
// import Rent from './Components/RentComponent/Rent';
// import Area from './Components/AreaComponent/Area';
import ApartmentDetails from './Components/Apartment/ApartmentDetailsComponent/ApartmentDetails';
// Wrap your components with React.lazy
const Home = lazy(() => import('./Components/HomeComponent/Home'));
const About = lazy(() => import('./Components/AboutComponent/About'));
const Contactus = lazy(() => import('./Components/ContactusComponent/Contactus'));
const RootLayout = lazy(() => import('./Components/RootLayout/RootLayout'));
const ErrorPage = lazy(() => import('./Components/ErrorPage/ErrorPage'));
const Area = lazy(() => import('./Components/AreaComponent/Area'));
const Rent = lazy(() => import('./Components/RentComponent/Rent'));
const Buy = lazy(() => import('./Components/Buy/Buy'));
// const ApartmentDetails = lazy(() => import('./Components/Apartment/ApartmentDetailsComponent/ApartmentDetails'));

let routers = createBrowserRouter([
  {path:'/', element: <RootLayout/>, children:[
    {index:true, element: <Home/>},
    {path:'About', element: <About headFlag={true}/>},
    {path:'Contact', element: <Contactus headFlag={true}/>},
    {path:'Area', element: <Area/>},
    {path:'Rent', element: <Rent/>},
    {path:'Buy', element: <Buy/>},
    {path:'ApartmentDetails', element: <ApartmentDetails/>},

  

      ]},
    {path:'*', element: <ErrorPage/>}

])

function App() {
  const i18nextLng=localStorage.getItem('i18nextLng')||"en";
  useEffect(() => {
    if(i18nextLng=="ar"){
      document.documentElement.dir = "rtl";
    }
  }, [i18nextLng]);

  return <React.Fragment>
   <RouterProvider router={routers}/>

</React.Fragment>
}

export default App;
