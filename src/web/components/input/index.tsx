import * as React from "react";
import "./index.css";

interface MyInputInterface {
    id: string,
    type: string,
    label: string,
    autofocus: boolean,
}

const MyInput = (params: MyInputInterface) => {
    // console.log(params.label);
    return <>
        <label htmlFor={params.id} className='my-input-label'>
            <span>{params.label}</span>
            <input name={params.type} id={params.id} type={params.type} className='my-input-input fr' autoFocus={params.autofocus}/>
        </label>
        <br/>
        <br/>
    </>;
};

interface MyButtonInterface {
    type: 'button' | 'reset' | 'submit',
    label: string,
}

const MyButton = (params: MyButtonInterface) => {
    return <>
        <label className='my-input-label clear'>
            <button className='fr' type={params.type}>{params.label}</button>
        </label>
    </>;
};
export {MyInput, MyButton};

