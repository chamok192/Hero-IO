import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Installation from "../pages/Installation";
import Application from "../pages/Application";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Error/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error/>,
        children:[
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/installation",
                element: <Installation />,
            },
            {
                path: "/application",
                element: <Application />,
            },
        ],
    },
    // {
    //     path:"*",
    //     element: <Error/>
    // }
    
    
]);

export default router;