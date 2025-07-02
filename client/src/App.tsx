import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainLayout from "./MainLayout";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import ForgetPassword from "./auth/ForgetPassword";
import ResetPassword from "./auth/ResetPassword";
import VerifyEmail from "./auth/VerifyEmail";
import Navbar from "./components/ui/Navbar";
const appRouter = createBrowserRouter([
  {
    path: "/",
    // element: <MainLayout />,
    element: <Navbar />,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/forgot-password",
    element: <ForgetPassword></ForgetPassword>,
  },
  {
    path: "/reset-password",
    element: <ResetPassword></ResetPassword>,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail></VerifyEmail>,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
      {/* <Login></Login> */}
    </>
  );
}

export default App;
