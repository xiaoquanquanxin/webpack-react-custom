import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Header from '@componentsHeader';
import Footer from '@componentsFooter';
import App from './page';

const appElement = document.getElementById('app');

ReactDOM.render(
    <>
    <Header/>
    <App/>
    <Footer/>
    </>, appElement);


import clear from './tools/console.clear';

clear(3333);

