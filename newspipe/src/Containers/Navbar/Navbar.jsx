import React, { useState } from 'react';
import CustomButton from '../../Components/CustomButton/CustomButton';
import cls from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import CustomInput from '../../Components/CustomInput/CustomInput';
import ModalWindow from '../../Components/ModalWindow/ModalWindow';
import CustomTextarea from '../../Components/CustomTextarea/CustomTextarea';
import { useDispatch, useSelector } from 'react-redux';
import { invisible, visible } from '../../Redux/Redux-slices/visibleSlice';
import { addNews } from '../../Redux/Redux-slices/newsSlice';

const Navbar = () => {
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    })
    const vis = useSelector(state => state.visibility.value)
    const dispatch = useDispatch();
    
    const inputHandler = (e) => {
        setFormData(prevState => { return { ...prevState, [e.target.name]: e.target.value } });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNews({
            title: formData.title,
            body: formData.body,
            dateOfNew: Date.now()
        }));
        dispatch(invisible())
        setFormData({
            title: '',
            body: ''
        })
    }
    const openAddForm = () => {
        dispatch(visible());
    }
    return (
        <header>
             <form onSubmit={handleSubmit}>
                <ModalWindow>
                    <CustomInput
                        onChange={inputHandler}
                        value={formData.title}
                        name='title'
                        style={{ width: '90%' }}
                        placeholder='Заголовок'
                    />
                    <CustomTextarea
                        onChange={inputHandler}
                        value={formData.body}
                        name='body'
                        placeholder='Текст новости'
                    />
                    <CustomButton type='submit'>Отправить новость
                    </CustomButton>
                </ModalWindow>
            </form>
            <ul>
                <NavLink className={cls.Nav_Link} to='/'><li className={cls.navbar_element}>К новостям!</li></NavLink>
                <li><CustomButton onClick={openAddForm}>Добавить новость</CustomButton></li>
            </ul>
        </header>
    );
};


export default Navbar;