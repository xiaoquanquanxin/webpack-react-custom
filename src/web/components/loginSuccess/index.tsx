import * as React from "react";

import {getToken} from "../../tools/tools";

const {useContext} = React;
import YdStore from "@models/YdStore";


const LoginSuccess = () => {
    const ydstore = useContext(YdStore);
    // console.log(ydstore.token);
    ydstore.token = getToken();
    return <>
        <h2>登录成功</h2>
    </>;
};
export default LoginSuccess;
