import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Installation from "../pages/Installation";
import Application from "../pages/Application";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Error/Error";
import AppDetails from "../pages/AppDetails";
import AppError from "../Error/AppError";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error/>,
        hydrateFallbackElement: <div>Loading...</div>,
        loader: () => new Promise(resolve => setTimeout(() => resolve({}), 1000)),
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
    {
        path:"/appError",
        element: <AppError/>
    }
    
    
]);

export default router;