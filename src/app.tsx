import React from 'react';
import ReactDom from 'react-dom';
import "./css/index.css";
import {RootView} from "./js/views/root/RootView";

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const App = () => {
    return (
        <body>
        <link rel="stylesheet" type="text/css"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <RootView/>
        </body>
    )

}

ReactDom.render(<App/>, mainElement);
