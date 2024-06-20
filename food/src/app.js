import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import {Header,Footer,Body,About,Contact,Error,RestaurantPage} from "./index";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import { Store } from "./redux-store/store";
import Cart from "./components/cart/Cart";


// !dynamic bundling for grocery component
const Grocery = lazy(() => import("./components/Grocery"));
const root = ReactDOM.createRoot(document.querySelector('.root'));

const App_Comp = () => {
    return (
        <Provider store={Store}>        
        <div className="wrapper text-red-200 w-screen min-h-screen">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        </Provider>
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
            },
            {
                path:"/products/:id",
                element:<RestaurantPage/>
            },
            {
                path:"/grocery",
                element:
                <Suspense fallback={<Shimmer/>}>
                    <Grocery/>
                </Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
        ],
        errorElement:<Error/>,
    }
])



root.render(<RouterProvider router = {appRouter}/>);