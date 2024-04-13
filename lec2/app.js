import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector('.parent'));

const heading = React.createElement(
    'h1',{},'hello world'
);

root.render(heading);