import * as React from "react";
import './index.css';

const random = Math.random();

function Footer() {
    return (
        <p className={'footer'}>页脚 {random}</p>
    );
}

export default Footer;
