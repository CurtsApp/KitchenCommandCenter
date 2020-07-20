import React from 'react';
import ReactDom from 'react-dom';
import {AppBar} from "@material-ui/core";
import "./css/index.css";

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const App = () => {
  return (
      <body>
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <div>
          <AppBar color="primary" position="static">
              <h1>Header check</h1>
          </AppBar>
          <h1 className={"test"}>Please do anything</h1>
      </div>
      </body>
  )
}

ReactDom.render(<App />, mainElement);
