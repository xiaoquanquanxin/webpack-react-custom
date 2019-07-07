import * as React from "react";
import {Routes} from "@routes";
//  @ts-ignore
import {BrowserRouter} from "react-router-dom";

const {useContext} = React;
import YdStore from "@models/YdStore";
import {observer} from "mobx-react-lite";

const Page = observer(() => {
    const ydstore = useContext(YdStore);
    const token = ydstore.token;
    return <BrowserRouter basename="/">{Routes(token)}</BrowserRouter>;
});
export {Page};