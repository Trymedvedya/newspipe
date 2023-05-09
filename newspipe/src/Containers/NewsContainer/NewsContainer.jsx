import React, { useEffect, useState } from 'react';
import cls from './NewsContainer.module.css'
import NewItemContainer from '../NewIItemContainer/NewItemContainer';
import { useDispatch, useSelector } from 'react-redux';
import { addNew,getNews} from '../../Redux/Redux-slices/newsSlice';
const NewsContainer = () => {
const news1 = useSelector(state=>state.news);
const dispatch = useDispatch();
useEffect(()=>dispatch(getNews()),[])
console.log(news1,'asd')
    return (
        <div className={cls.NewsContainer}>
            {news1.news.map(el=><NewItemContainer title={el[1].title} body={el[1].body} key={el[0]}/>)}
           
        </div>
    );
};



export default NewsContainer;