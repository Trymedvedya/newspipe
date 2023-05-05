import React, { useEffect, useState } from 'react';
import cls from './NewsContainer.module.css'
import NewItemContainer from '../NewIItemContainer/NewItemContainer';
import { useDispatch, useSelector } from 'react-redux';
import { addNew, getNews } from '../../Redux/Redux-slices/newsSlice';
const NewsContainer = () => {
const news = useSelector(state=>state.news);
const dispatch = useDispatch();
const news1 = Object.entries(news)
console.log(news1,'asd')
    return (
        <div className={cls.NewsContainer}>
         <NewItemContainer title='Пибоди' body='Танк Шерман'/>
           <button onClick={()=>dispatch(addNew({id:1,title:'adaasd',body:'sadadasdasdasd'}))}>ПАЛОАЦРШ</button>
        </div>
    );
};



export default NewsContainer;