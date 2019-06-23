import * as React from "react";
import './index.css';
function Header() {
    return (
        <ul className={'clear'}>
            <li>
                <a href="/">首页</a>
            </li>
            <li>
                <a href="/login">登录</a>
            </li>
            <li>
                <a href="/contentPage">其他</a>
            </li>
        </ul>
    );
}

export default Header ;
