import React from "react";

//INTERNAL IMPORT
import Style from './Error.module.css';
const Error = ({error}) => {
    console.log(error);
    return (
    <div className={Style.Error}>
        <div className = {Style.Error_box}>
            <h1>Please fix This Error & Reload Browser</h1>
        </div>
    </div>
    )
};

export default Error;