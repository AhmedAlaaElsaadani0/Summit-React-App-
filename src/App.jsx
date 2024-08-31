import React, { lazy, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Buy from './Components/Buy/Buy';
// import Rent from './Components/RentComponent/Rent';
// import ApartmentDetails from './Components/Apartment/ApartmentDetailsComponent/ApartmentDetails';
import i18n from "./i18n";
// import RootLayout from "./Components/RootLayout/RootLayout";
//Login system
// import Form from './Components/Form/Form';
// import Signup from './Components/Form/Signup/Signup';
// import { UserContextProvider } from './Context/UserContextProvider';
import Error from "./Components/Error/Error";
import Spinner from "./Components/Spinner/Spinner";
// Wrap your components with React.lazy
const RootLayout = lazy(() => import("./Components/RootLayout/RootLayout"));
const Home = lazy(() => import("./Components/HomeComponent/Home"));
const About = lazy(() => import("./Components/AboutComponent/About"));
const Contactus = lazy(() =>
  import("./Components/ContactusComponent/Contactus")
);
const Rent = lazy(() => import("./Components/RentComponent/Rent"));
const Buy = lazy(() => import("./Components/Buy/Buy"));
const ApartmentDetails = lazy(() =>
  import("./Components/Apartment/ApartmentDetailsComponent/ApartmentDetails")
);
import ErrorTracking from "./Components/ErrorTracking/ErrorTracking";
let routers = createBrowserRouter([
  {
    errorElement: <Error />,
    path: "/",
    element: (
      <React.Suspense
        fallback={
          <div
            className="w-100 vh-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "var(--whiteToBlack) !important" }}
          >
            <Spinner />
          </div>
        }
      >
        <RootLayout />
      </React.Suspense>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: "About",
        element: (
          <React.Suspense fallback={<Spinner />}>
            {" "}
            <About headFlag={true} />{" "}
          </React.Suspense>
        ),
      },
      {
        path: "Contact",
        element: (
          <React.Suspense fallback={<Spinner />}>
            {" "}
            <Contactus headFlag={true} />{" "}
          </React.Suspense>
        ),
      },
      {
        path: "Rent",
        element: (
          <React.Suspense fallback={<Spinner />}>
            {" "}
            <Rent />{" "}
          </React.Suspense>
        ),
      },
      {
        path: "Buy",
        element: (
          <React.Suspense fallback={<Spinner />}>
            {" "}
            <Buy />{" "}
          </React.Suspense>
        ),
      },
      {
        path: "ApartmentDetails/:id",
        element: (
          <React.Suspense fallback={<Spinner />}>
            {" "}
            <ApartmentDetails />{" "}
          </React.Suspense>
        ),
      },
    ],
  },
  //Login system
  // ,
  // {
  //   path: '/forms', element: <Form />, children: [
  //     { index: true, element: <Signup /> },
  //     { path: "Signup", element: <Signup /> },
  //   ]
  // }
  { path: "*", element: <Error /> },
]);

function App() {
  const i18nextLng = localStorage.getItem("i18nextLng") || "en";
  i18n.changeLanguage(i18nextLng);
  if (i18nextLng === "ar") document.body.dir = "rtl";
  else document.body.dir = "ltr";
  // that is a dark mode for the loading page before the app is loaded
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.querySelector("body").classList.toggle("dark");
    }
  }, []);

  return (
    <>
      <ErrorTracking>
      {/* <UserContextProvider> */}
      <RouterProvider router={routers} />
      {/* </UserContextProvider> */}
      </ErrorTracking>
    </>
  );
}

export default App;
