import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Installation from "../pages/Installation";
import Application from "../pages/Application";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Error/Error";
import AppDetails from "../pages/AppDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error/>,
        hydrateFallbackElement: <div>Loading...</div>,
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
            {
                path:"/application/:id",
                element: <AppDetails />,
            },
        ],
    },
    // {
    //     path:"*",
    //     element: <Error/>
    // }
    
    
]);

export default router;