/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import cls from './NewsContainer.module.css'
import NewItemContainer from '../NewIItemContainer/NewItemContainer';
import { useDispatch, useSelector } from 'react-redux';
import { addNews, editNews, getNews } from '../../Redux/Redux-slices/newsSlice';
import CustomButton from '../../Components/CustomButton/CustomButton'
import { invisible, visible } from '../../Redux/Redux-slices/visibleSlice'
import ModalWindow from '../../Components/ModalWindow/ModalWindow'
import CustomTextarea from '../../Components/CustomTextarea/CustomTextarea';
import CustomInput from '../../Components/CustomInput/CustomInput'
const NewsContainer = () => {
    const news = useSelector(state => state.news);
    const vis = useSelector(state => state.visibility.value)
    const dispatch = useDispatch();
    
    

    useEffect(() => {
        dispatch(getNews());
        sessionStorage.clear()
    }, [dispatch])

    
    
    
    return (
        <div className={cls.NewsContainer}>
            {news.news.length == 0 ? <span className={cls.no_news}>Новостей нет</span> : news.news.map(el =>
                <NewItemContainer
                    title={el[1].title}
                    body={el[1].body}
                    dateOfNew={el[1].dateOfNew}
                    key={el[0]}
                    id={el[0]} />)}
            

        </div>
    );
};



export default NewsContainer;