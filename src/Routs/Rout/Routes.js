import { createBrowserRouter } from "react-router-dom";
import Main from "../../leyout/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";

 const router = createBrowserRouter([
    {
        path: '/',
         element: <Main></Main>,
         children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:"/appointment",
                element:<Appointment></Appointment>
            }
         ]
         
    }
 ])
 export default router;