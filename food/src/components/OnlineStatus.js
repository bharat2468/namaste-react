import React, { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const OnlineStatus = () => {
    const status = useOnlineStatus();

    return (
        <div className="avatar indicator">
            {status ? (
            <span className="indicator-item badge  badge-success">Online</span>) : (
            <span className="indicator-item badge badge-error">Offline</span>)}
            <div className="w-20 h-20 rounded-lg">
                <img
                    alt="Tailwind CSS examples"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
            </div>
        </div>
    );
};

export default OnlineStatus;
