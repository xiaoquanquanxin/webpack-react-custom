import * as React from "react";
import {
    HashRouter as Router,
    Link, Route
} from 'react-router-dom'

function SubRoute({rootRoute}) {
    return (
        <ul className={'clear'}>
            <li>
                <Link to={rootRoute + ''}>普通</Link>
                {/*<a href={rootRoute + ''}>普通</a>*/}
            </li>
            <li>
                <a href={rootRoute + '/abc'}>abc</a>
                {/*<Link to={rootRoute + '/abc'}>abc</Link>*/}
            </li>
        </ul>
    );
}

export default SubRoute;


