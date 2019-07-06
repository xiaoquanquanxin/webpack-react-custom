import * as React from "react";
import './index.css';
//  @ts-ignore
import {NavLink} from 'react-router-dom'


function Header() {
    return (
        <>
            <ul className={'clear'}>
                <li><NavLink to='/'>首页</NavLink></li>
                <li><NavLink to='/login'>登录</NavLink></li>
                <li><NavLink to='/contentPage'>文档</NavLink></li>
                <li><NavLink to='/userBehavior'>行为</NavLink></li>
            </ul>
        </>
    );
}

export default Header;
