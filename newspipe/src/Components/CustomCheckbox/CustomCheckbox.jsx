import React from 'react';
import cls from './CustomCheckbox.module.css'
const CustomCheckbox = (props) => {
    return (
        <label className={cls.MCheckbox_container}>
            <input className={cls.MCheckbox} {...props} type="checkbox" />
            <span className={cls.spin}></span>
        </label>
    );
};



export default CustomCheckbox;