import * as React from 'react';
import * as ReactDOM from 'react-dom';


import Header from '@componentsHeader';
import Footer from '@componentsFooter';
import Loading from '@componentsLogin';


import Routes from "@routes";


const appElement = document.getElementById('app');

ReactDOM.render(<>
<Header/>
<Loading/>
<Footer/>
</>, appElement);


import clear from './tools/console.clear';

clear(3333);

