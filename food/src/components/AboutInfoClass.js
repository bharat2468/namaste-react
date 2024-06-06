import React from "react";

class AboutInfoClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count1: 0,
        };

        console.log("child constructor")
    }

    componentDidMount(){
        console.log("child comp did mount");
    }

    render() {
        const { name } = this.props;
        const { count, count1 } = this.state;

        console.log("child render")

        return (
            <div className=" border-t-2 hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className=" text-lg">
                            count = {count} <br></br> count1 = {count1}
                        </p>
                        <button
                            className=" btn btn-primary"
                            onClick={() => {
                                //!never update state variables directly
                                //!only those variables will be changes those are mentioned here 
                                this.setState({
                                    count:count + 1,
                                    count1:count1 + 1
                                })
                            }}
                        >
                            Click
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutInfoClass; 
