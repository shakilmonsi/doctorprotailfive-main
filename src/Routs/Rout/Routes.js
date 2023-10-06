import { createBrowserRouter } from "react-router-dom";
import Main from "../../leyout/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Contectform from "../../Pages/Contect/Contectform";
import Singup from "../../Login/Sineup/Singup";
import Privetrouts from "./PrivetRouts/Privetrouts";
import DashboardLoayut from "../../leyout/DashboardLeyout/DashboardLoayut";
import Myappointments from "../../Pages/Dashboard/Dashboard/MyAppointment/Myappointments";
import Allusers from "../../Pages/Dashboard/Dashboard/Allusers/Allusers";

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
        element: <Privetrouts> <DashboardLoayut></DashboardLoayut> </Privetrouts>,
   children:[
    {
        path: '/dashbord',
        element: <Myappointments></Myappointments>

    },
    {
        path: '/dashbord/allusers',
        element: <Allusers></Allusers>
    },
   ]
   
    }


 ])
 export default router;