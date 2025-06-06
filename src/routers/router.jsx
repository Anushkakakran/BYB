import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/AboutUs";
import Book from "../pages/Book/Book";
import Register from "../pages/AuthPages/Register";
import Login from "../pages/AuthPages/Login";
import ContactForm from "../pages/ContactUs";
import BouncerDetails from "../pages/Book/BouncerDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/book-bouncer",
        element: <Book/>,
      },
      {
        path: "/book-bouncer/:id",
        element: <BouncerDetails/>
      },
      {
        path: "/about-us",
        element: <About/>
      },
      {
        path: "/sign-up",
        element: <Register/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/contact",
        element: <ContactForm/>
      },
    ]
  }
]);

export default router;