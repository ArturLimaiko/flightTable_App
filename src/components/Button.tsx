import React from 'react';

type ButtonProps={
    title:string
    onClick:()=>void
}
// передали 2 обязательных - заголовок и онклик + деструктурнули
export const Button= ({title,onClick}:ButtonProps) => {

    //функия посредник которая вызывает онклик
    const onClickHandler=()=>{
        onClick()
    }

    return (
        <button onClick={onClickHandler}>{title}</button>
    );
};

