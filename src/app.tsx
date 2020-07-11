import React from 'react';
import ReactDom from 'react-dom';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <h1>
      Hi from a react app. Test. Hi Katie
    </h1>
  )
}

ReactDom.render(<App />, mainElement);
