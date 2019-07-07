import * as React from 'react';
//  @ts-ignore
import * as ReactDOM from 'react-dom';


import {Footer} from '@componentsFooter';
import {Page} from './page';

const appElement = document.getElementById('app');

ReactDOM.render(
    <>
        <Page/>
        <Footer/>
    </>, appElement);


