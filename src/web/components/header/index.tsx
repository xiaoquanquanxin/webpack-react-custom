import * as React from "react";
import './index.css';
//  @ts-ignore
import {NavLink} from 'react-router-dom'


function Header() {
    //  设置menu的颜色
    const setActive = (e: Event) => {
        const a = e.target;
        if (a.tagName.toLowerCase() !== 'a') {
            return
        }
        const li = a.parentNode;
        const ul = li.parentNode;
        Array.prototype.forEach.call(ul.children, (item) => {
            item.classList.remove('_act');
            item.classList.remove('_act_prev');
            item.classList.remove('_act_next');
        });

        if (ul.lastChild === li) {
            ul.classList.add('_act_last');
        } else {
            ul.classList.remove('_act_last')
        }

        li.classList.add('_act');
        li.previousElementSibling && li.previousElementSibling.classList.add('_act_prev');
        li.nextElementSibling && li.nextElementSibling.classList.add('_act_next');
    };

    return (
        <>
            <ul className='clear main-menu' onClick={setActive}>
                <li><NavLink to='/'>首页</NavLink></li>
                <li><NavLink to='/login'>登录</NavLink></li>
                <li><NavLink to='/contentPage'>文档</NavLink></li>
                <li><NavLink to='/userBehavior'>行为</NavLink></li>
            </ul>
        </>
    );
}

export default Header;
