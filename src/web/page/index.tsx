import * as React from "react";
import {Routes} from "@routes";
//  @ts-ignore
import {BrowserRouter} from "react-router-dom";

const Page = () => {
    return <BrowserRouter basename="/">{Routes()}</BrowserRouter>;
};
export {Page};

