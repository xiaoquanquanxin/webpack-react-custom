import * as React from "react";
function Header() {
    return (
        <ul>
            <li>
                <a href="/">首页</a>
            </li>
            <li>
                <a href="/login">登录</a>
            </li>
            <li>
                <a href="/demos">其他</a>
            </li>
        </ul>
    );
}

export default Header ;
