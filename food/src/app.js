import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";


const root = ReactDOM.createRoot(document.querySelector('.root'));

const App_Comp = () => {
    return (
        <div className="wrapper text-red-200 w-screen min-h-screen">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}


root.render(<App_Comp/>);