import React, { lazy, } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Buy from './Components/Buy/Buy';
import Rent from './Components/RentComponent/Rent';
import ApartmentDetails from './Components/Apartment/ApartmentDetailsComponent/ApartmentDetails';
import i18n from './i18n';
import RootLayout from './Components/RootLayout/RootLayout';
//Login system
// import Form from './Components/Form/Form';
// import Signup from './Components/Form/Signup/Signup';
import { UserContextProvider } from './Context/UserContextProvider';
import Error from './Components/Error/Error';
// Wrap your components with React.lazy
const Home = lazy(() => import('./Components/HomeComponent/Home'));
const About = lazy(() => import('./Components/AboutComponent/About'));
const Contactus = lazy(() => import('./Components/ContactusComponent/Contactus'));
const ErrorPage = lazy(() => import('./Components/ErrorPage/ErrorPage'));
// const RootLayout = lazy(() => import('./Components/RootLayout/RootLayout'));
// const Area = lazy(() => import('./Components/AreaComponent/Area'));
// const Rent = lazy(() => import('./Components/RentComponent/Rent'));
// const Buy = lazy(() => import('./Components/Buy/Buy'));
// const ApartmentDetails = lazy(() => import('./Components/Apartment/ApartmentDetailsComponent/ApartmentDetails'));

let routers = createBrowserRouter([
  {
    errorElement:<Error/>,
    path: '/', element: <RootLayout />, children: [
      { index: true, element: <Home /> },
      { path: 'About', element: <About headFlag={true} /> },
      { path: 'Contact', element: <Contactus headFlag={true} /> },
      { path: 'Rent', element: <Rent /> },
      { path: 'Buy', element: <Buy /> },
      { path: 'ApartmentDetails/:id', element: <ApartmentDetails /> },



    ],
    }
  //Login system
  // ,
  // {
  //   path: '/forms', element: <Form />, children: [
  //     { index: true, element: <Signup /> },
  //     { path: "Signup", element: <Signup /> },
  //   ]
  // }
  ,
  { path: '*', element: <ErrorPage /> },


])

function App() {
  const i18nextLng = localStorage.getItem("i18nextLng") || "en";
  i18n.changeLanguage(i18nextLng);
  if (i18nextLng === "ar")
    document.body.dir = "rtl";
  else
    document.body.dir = "ltr";


  return <>
  <ErrorTracking>
    <UserContextProvider>
      <RouterProvider router={routers} />
    </UserContextProvider>
  </ErrorTracking>

  </>
}

export default App;
