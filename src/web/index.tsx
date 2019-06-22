import * as React from 'react';
import * as ReactDOM from 'react-dom';



// import App from './pages/app';
//
const appElement = document.getElementById('app');
// ReactDOM.render(<App />, appElement);


import Loading from '@componentsLogin';
console.log(Loading);
ReactDOM.render(<Loading />, appElement);




import clear from './tools/console.clear';
clear(3333);

