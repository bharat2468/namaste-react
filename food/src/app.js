import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import {Header,Footer,Body,About,Contact,Error} from "./index";


const root = ReactDOM.createRoot(document.querySelector('.root'));

const App_Comp = () => {
    return (
        <div className="wrapper text-red-200 w-screen min-h-screen">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App_Comp/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact_us",
                element:<Contact/>
            }
        ],
        errorElement:<Error/>,
    }
])



root.render(<RouterProvider router = {appRouter}/>);