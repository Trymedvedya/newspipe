import React from 'react';
import cls from './ModalWindow.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { invisible } from '../../Redux/Redux-slices/visibleSlice';
const ModalWindow = (props) => {
    const vis = useSelector((state) => state.visibility.value);
    const dispatch = useDispatch();
    const hCltClear = () => {
        dispatch(invisible());
    }
    return (
        <div onClick={hCltClear} className={vis === true ? cls.outside_window : cls.outside_window_non_active}>
            <div onClick={(e) => e.stopPropagation()} className={cls.inside_window}>
                <p className={cls.title}>{props.title}</p>
                {props.children}
            </div>
        </div>
    );
};



export default ModalWindow;