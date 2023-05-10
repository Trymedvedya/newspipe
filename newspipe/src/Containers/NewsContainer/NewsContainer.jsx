/* eslint-disable no-unused-vars */
import React, { useEffect} from 'react';
import cls from './NewsContainer.module.css'
import NewItemContainer from '../NewIItemContainer/NewItemContainer';
import { useDispatch, useSelector } from 'react-redux';
import {getNews} from '../../Redux/Redux-slices/newsSlice';
import CustomButton from '../../Components/CustomButton/CustomButton'
import {visible} from '../../Redux/Redux-slices/visibleSlice'
import ModalWindow from '../../Components/ModalWindow/ModalWindow'
import CustomTextarea from '../../Components/CustomTextarea/CustomTextarea';
import CustomInput from '../../Components/CustomInput/CustomInput'
const NewsContainer = () => {
const news1 = useSelector(state=>state.news);
const vis = useSelector(state=>state.visibility.value)
const dispatch = useDispatch();
useEffect(()=>{dispatch(getNews())},[dispatch])
console.log(news1,'asd')
    return (
        <div className={cls.NewsContainer}>
            <form action="">
                <ModalWindow>
                <CustomInput style={{alignSelf:'flex-start',marginLeft:'31px'}} placeholder='Заголовок'></CustomInput>
                <CustomTextarea placeholder='Текст новости'></CustomTextarea>
                <CustomButton>Отправить новость</CustomButton>
                </ModalWindow>
            </form>
            {news1.news.map(el=><NewItemContainer title={el[1].title} body={el[1].body} key={el[0]} id={el[0]}/>)}
            {vis==false?<CustomButton onClick={()=>dispatch(visible())}>Добавить новость</CustomButton>:null}

        </div>
    );
};



export default NewsContainer;