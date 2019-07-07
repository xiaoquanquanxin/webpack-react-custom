import * as React from "react";
//  @ts-ignore
import {Link, NavLink} from 'react-router-dom'

interface RootRoute {
    rootRoute: string
}

function SubRoute(params: RootRoute) {
    // console.log(params.rootRoute)
    return (
        <ul className={'clear'}>
            <li><NavLink to={params.rootRoute}>行为的首页,自路由不能用啊</NavLink></li>
            <li><NavLink to={params.rootRoute + '/abc'}>abc</NavLink></li>
        </ul>
    );
}

export default SubRoute;


