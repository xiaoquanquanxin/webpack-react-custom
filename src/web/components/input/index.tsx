import * as React from "react";
import "./index.css";

interface MyInputInterface {
    id: string,
    type: string,
    label: string,
    autofocus: boolean,
}

const MyInput = (params: MyInputInterface) => {
    console.log(params.label);
    return <>
        <label htmlFor={params.id} className='my-input-label'>
            <span>{params.label}</span>
            <input id={params.id} type={params.type} className='my-input-input fr' autoFocus={params.autofocus}/>
        </label>
        <br/>
        <br/>
    </>;
};

interface MyButtonInterface {
    type: string,
    label: string,
}

const MyButton = (params: MyButtonInterface) => {
    return <>
        <label className='my-input-label clear'>
            <button className='fr'>{params.label}</button>
        </label>
    </>;
};
export {MyInput, MyButton};

