import AboutInfoFun from "./AboutInfoFun";
import AboutInfoClass from "./AboutInfoClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor")
    }

    componentDidMount(){
        console.log("parent comp did mount")
    }

    render(){
        console.log("parent render");
        
        return(

            <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="stats stats-vertical shadow">
            <div className="stat">
                <div className="stat-title">Downloads</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
                <div className="stat-title">New Users</div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
        </div>
        <AboutInfoClass name={"hello"}/>

        </div>
        

        )
    }
}


export default About;
