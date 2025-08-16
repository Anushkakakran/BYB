import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OauthSuccess from "../Components/oauthSuccess";
import App from "../App";
import Home from "../pages/BasicPages/Home.jsx";
import About from "../pages/BasicPages/AboutUs.jsx";
import Book from "../pages/Book/Book.jsx";
import Register from "../pages/AuthPages/Register";
import Login from "../pages/AuthPages/Login";
import ContactForm from "../pages/BasicPages/ContactUs";
import BouncerDetails from "../pages/BouncerDetails/BouncerDetails";
import PrivateRoute from "../utils/Protected";
import ProfilePage from "../pages/BasicPages/Profile";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      { path: "/", element: <Home /> },
      { path: "/book-bouncer", element: <Book /> },
      {
        element: <PrivateRoute />, 
        children: [

        ],
      },
      { path: "/book-bouncer/:id", element: <BouncerDetails /> },
      { path: "/about-us", element: <About /> },
      { path: "/sign-up", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/oauth-success", element: <OauthSuccess /> },
      { path: "/contact", element: <ContactForm /> },
      { path: "/profile", element: <ProfilePage/> },
    ],
  },
]);

export default router;