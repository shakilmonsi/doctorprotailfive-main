import { createBrowserRouter } from "react-router-dom";
import Main from "../../leyout/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Login/Login";

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
            }
         ]
         
    }
 ])
 export default router;