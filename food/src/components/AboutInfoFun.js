import { useState } from "react";

const AboutInfoFun = (props) => {
    const {name} = props;
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className=" text-lg">count = {count} <br></br>  count1 = {count1}</p>
                    <button className=" btn btn-primary"  onClick={() => {
                        setCount(count + 1);
                        setCount1(count1 + 1);
                    }}>Click</button>
                </div>
            </div>
        </div>
    );
};

export default AboutInfoFun;
