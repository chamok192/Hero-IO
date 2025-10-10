import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Installation from "../pages/Installation";
import Application from "../pages/Application";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Error/Error";
import AppDetails from "../pages/AppDetails";
import AppError from "../Error/AppError";
import Loading from "../Components/Loading";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error/>,
        hydrateFallbackElement: <Loading/>,
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
                errorElement: <AppError />,
            },
            {
                path:"/application/:id",
                element: <AppDetails />,
                errorElement: <AppError />,
            },
        ],

        
    },
    
    
    
]);

export default router;