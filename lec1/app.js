import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom/client';


// *basics
// telling where to use react
const root = ReactDOM.createRoot(document.querySelector('.root'));

// the below code creates an js object which browser cant understand 
// the browser can only understand the html code 
// const heading = React.createElement(
//     "h1",
//     {
//         id:"head",
//         class:"xyz"
//     },
//     "hello World!"
// );

// // it converts the js object to html element and puts it in the root
// if you use render then it erases the previous content and puts new NOT updates
// root.render(heading);


// *creating nested structure
/* 
<div id=parent >
    <div id=child>
        <h1>hello </h1>
    </div>
</div> 
*/

const nest = React.createElement(
    "div",
    { id:"parent" },
    React.createElement(
        "div",{ id:"child" },
        React.createElement("h1",{},"hello")
    )
);

root.render(nest);



// *creating siblings
// just pass an array in children prop
/* 
<div id=parent >
    <div id=child>
        <h1>hello </h1>
        <h2>hello2 </h2>
    </div>
</div> 
*/

const nest2 = React.createElement(
    "div",
    { id:"parent" },
    React.createElement(
        "div",{ id:"child" },
        [React.createElement("h1",{},"helloworld"),
        React.createElement("h2",{},"hello")]
    )
);

root.render(nest2);


// !the createElement will not be used further as we will JSX
// !REact can work without JSX 

