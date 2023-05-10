import React from 'react';
import cls from './CustomButton.module.css'
const CustomButton = (props) => {
    return (
        <button className={cls.MButton} {...props}>{props.children}</button>
    );
};

export default CustomButton;