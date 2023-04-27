import React from 'react';
import cls from './CustomInput.module.css'

const CustomInput = (props) => {
    return (
        <input className={cls.Minput} {...props} />
    );
};



export default CustomInput;