import React, { useEffect, useState } from "react";
import Loader from "./admin-panel src/common/Loader";
import DefaultLayout from "./admin-panel src/layout/DefaultLayout";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "./admin-panel src/components/PageTitle";
import ECommerce from "./admin-panel src/pages/Dashboard/ECommerce";
import LoginPage from "./admin-panel src/pages/Login/Login";
import RegisterPage from "./admin-panel src/pages/Register/Register";
import Calendar from "./admin-panel src/pages/Calendar";
import Profile from "./admin-panel src/pages/Profile";
import FormElements from "./admin-panel src/pages/Form/FormElements";
import FormLayout from "./admin-panel src/pages/Form/FormLayout";
import Tables from "./admin-panel src/pages/Tables";
import Settings from "./admin-panel src/pages/Settings";
import Chart from "./admin-panel src/pages/Chart";
import Alerts from "./admin-panel src/pages/UiElements/Alerts";
import Buttons from "./admin-panel src/pages/UiElements/Buttons";
import SignIn from "./admin-panel src/pages/Authentication/SignIn";
import SignUp from "./admin-panel src/pages/Authentication/SignUp";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import { checkAuth } from "../../redux/slices/AuthSlice";
import ChangePassword from "./admin-panel src/pages/Form/ChangePassword";

const AdminPanel = () => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
    console.log("fetthing");
    // setTimeout(() => setLoading(false), 1000);
    //   userData();

    // dispatch(fetchUsers())
  }, [dispatch]);
  const { isAuthenticated, status } = useSelector((state) => state.auth);
  
  console.log("login", isAuthenticated);
  console.log(useSelector((state) => state.auth));
  const navigate = useNavigate();
  const userData = async () => {
    // console.log( "running");
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL; // Assuming you have this defined
      const response = await axios.get(baseUrl + "admin/user-data", {
        withCredentials: true,
      });

      console.log("res:", response);

      if (loading) {
        setLoading(false);
      }
      return response.data;
    } catch (error) {
      if (error.response.data.message === "jwt authentication error") {
        navigate("/admin/auth/signin");
      }
      // Handle errors appropriately

      // console.log('error in fetching data',error.response.data)
      // throw error;
    }
  };
  // console.log( "loading",loading);
  useEffect(() => {
    window.scrollTo(0, 0);
    // const cookies = Cookies.get("admin");
    // if (!cookies) {
    //   navigate("/admin/auth/signin");
    // }
  }, [pathname]);
  if (status === "loading") {
    return <Loader />; // Show loading state while checking auth
  }

  return (
    <>
      {!isAuthenticated ? (
        <SignIn />
      ) : (
        <DefaultLayout>
          <Routes>
            <Route path="/admin">
              <Route
                index
                element={
                  <>
                    <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <ECommerce />
                  </>
                }
              ></Route>
              <Route
                path="change-password"
                element={
                  <>
                    <PageTitle title="Change Password" />
                    {/* <PageTitle title="Login Page" />
                    <PageTitle title="Login Page" /> */}
                    <ChangePassword/>
                  </>
                }
              />
              <Route
                path="register"
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
      )}
    </>
  );
};
export default AdminPanel;
