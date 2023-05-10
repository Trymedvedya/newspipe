import React from 'react';
import cls from './CustomTextarea.module.css'

const CustomTextarea = (props) => {
    return (
        <textarea className={cls.CT} {...props}>{props.children}</textarea>
    );
};


export default CustomTextarea;