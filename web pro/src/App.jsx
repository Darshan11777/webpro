import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/homePage/Home'
import Navbar from './component/Navbar';
import AboutUs from './pages/aboutUs/AboutUs';
import AdminPanel from './pages/adminPanel/AdminPanel';
import PageTitle from './pages/AdminPanel/src/components/PageTitle';
import ECommerce from './pages/AdminPanel/src/pages/Dashboard/ECommerce';
import LoginPage from './pages/AdminPanel/src/pages/Login/Login';
import RegisterPage from './pages/AdminPanel/src/pages/Register/Register';
import Calendar from './pages/AdminPanel/src/pages/Calendar';
import Profile from './pages/AdminPanel/src/pages/Profile';
import FormElements from './pages/AdminPanel/src/pages/Form/FormElements';
import FormLayout from './pages/AdminPanel/src/pages/Form/FormLayout';
import Tables from './pages/AdminPanel/src/pages/Tables';
import Settings from './pages/AdminPanel/src/pages/Settings';
import Chart from './pages/AdminPanel/src/pages/Chart';
import Alerts from './pages/AdminPanel/src/pages/UiElements/Alerts';
import Buttons from './pages/AdminPanel/src/pages/UiElements/Buttons';
import SignIn from './pages/AdminPanel/src/pages/Authentication/SignIn';
import SignUp from './pages/AdminPanel/src/pages/Authentication/SignUp';
import DefaultLayout from './pages/AdminPanel/src/layout/DefaultLayout';

export default function App() {
  const location = useLocation();

  // Check if the current path starts with "/admin"
  const isAdminPath = location.pathname.startsWith('/admin');
 
  return (
    <div>
      {/* <BrowserRouter></BrowserRouter> */}
{isAdminPath ? (
   <DefaultLayout>
  <Routes>

   <Route
          path="/admin"
         
        >
          <Route index 
           element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
          >

          </Route>
        <Route
          path='login'
          element={
            <>
              <PageTitle title="Login Page" />
              {/* <PageTitle title="Login Page" />
              <PageTitle title="Login Page" /> */}
              <LoginPage />
            </>
          }
        />
        <Route
          path='register'
          element={
            <>
              <PageTitle title="Login Page" />
              {/* <PageTitle title="Login Page" />
              <PageTitle title="Login Page" /> */}
              <RegisterPage />
            </>
          }
        />
        <Route
          path="calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </>
          }
        />
        <Route
          path="profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
        </Route>
  </Routes>
        </DefaultLayout>
):(
  <>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="about-us" element={<AboutUs />} />
  </Routes>
  </>
)

      }

   
    </div>
  )
}

    // <BrowserRouter>
    // <Navbar/>
   

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="about-us" element={<AboutUs />} />
    //     {/* <Route path="admin" element={<AdminPanel />} /> */}
    //     {/* <DefaultLayout> */}

    //     <Route
    //       path="admin"
    //       element={
    //         <>
    //           <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <ECommerce />
    //         </>
    //       }
    //     >
    //     <Route
    //       path='login'
    //       element={
    //         <>
    //           <PageTitle title="Login Page" />
    //           {/* <PageTitle title="Login Page" />
    //           <PageTitle title="Login Page" /> */}
    //           <LoginPage />
    //         </>
    //       }
    //     />
    //     <Route
    //       path='register'
    //       element={
    //         <>
    //           <PageTitle title="Login Page" />
    //           {/* <PageTitle title="Login Page" />
    //           <PageTitle title="Login Page" /> */}
    //           <RegisterPage />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="calendar"
    //       element={
    //         <>
    //           <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Calendar />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="profile"
    //       element={
    //         <>
    //           <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Profile />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="forms/form-elements"
    //       element={
    //         <>
    //           <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <FormElements />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="forms/form-layout"
    //       element={
    //         <>
    //           <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <FormLayout />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="tables"
    //       element={
    //         <>
    //           <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Tables />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="settings"
    //       element={
    //         <>
    //           <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Settings />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="chart"
    //       element={
    //         <>
    //           <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Chart />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="ui/alerts"
    //       element={
    //         <>
    //           <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Alerts />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="ui/buttons"
    //       element={
    //         <>
    //           <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Buttons />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="auth/signin"
    //       element={
    //         <>
    //           <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <SignIn />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="auth/signup"
    //       element={
    //         <>
    //           <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <SignUp />
    //         </>
    //       }
    //     />
    //     </Route>
    //     {/* </DefaultLayout> */}
    //     {/* Add more routes as needed */}
    //   </Routes>
   
    // </BrowserRouter>