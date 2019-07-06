import * as React from "react";
import "./index.css";
import {MyInput, MyButton} from '../input';

alert('登录');
const Login = () => {
    return <>
        <div className="components-login">
            <form className='login-form' action='/dengluwangzhi' method='post'>
                <h2>登陆</h2>
                <MyInput type='text' id='username' label='用户名' autofocus={true}/>
                <MyInput type='password' id='password' label='密码' autofocus={false}/>
                <MyButton type='submit' label='登录'/>
            </form>
        </div>
    </>;
};
export default Login;
