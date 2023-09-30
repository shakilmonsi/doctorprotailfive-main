import { createBrowserRouter } from "react-router-dom";
import Main from "../../leyout/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Contectform from "../../Pages/Contect/Contectform";
import Singup from "../../Login/Sineup/Singup";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";

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
                path:'/singup',
                element: <Singup></Singup>
            },
            {
                path:"/appointment",
                element:<Appointment></Appointment>
            },
            {
                path:'/contactas',
                element:<Contectform></Contectform>
            }
         ]  
    },
    {
        path:"/dashbord",
        element:<Dashboard></Dashboard>
    }


 ])
 export default router;