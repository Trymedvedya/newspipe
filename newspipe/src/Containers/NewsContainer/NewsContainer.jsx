/* eslint-disable no-unused-vars */
import React, { useEffect, useState} from 'react';
import cls from './NewsContainer.module.css'
import NewItemContainer from '../NewIItemContainer/NewItemContainer';
import { useDispatch, useSelector } from 'react-redux';
import {addNews, editNews, getNews} from '../../Redux/Redux-slices/newsSlice';
import CustomButton from '../../Components/CustomButton/CustomButton'
import {invisible, visible} from '../../Redux/Redux-slices/visibleSlice'
import ModalWindow from '../../Components/ModalWindow/ModalWindow'
import CustomTextarea from '../../Components/CustomTextarea/CustomTextarea';
import CustomInput from '../../Components/CustomInput/CustomInput'
const NewsContainer = () => {
const news1 = useSelector(state=>state.news);
const vis = useSelector(state=>state.visibility.value)
const dispatch = useDispatch();
const [formData, setFormData] = useState({
    title:'',
    body:''
})
const [status, setStatus]=useState({status:'add'})
console.log(status)
const editNews = () =>{

}
useEffect(()=>{dispatch(getNews())},[dispatch])
const inputHandler = (e) =>{
    setFormData(prevState=>{return{...prevState,[e.target.name]:e.target.value}});
}
const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(addNews({title:formData.title,body:formData.body, dateOfNew:Date.now()}));
    dispatch(invisible())
    setFormData({title:'',body:''})
}
const openAddForm = () =>{
    setStatus({status:'add'})
    dispatch(visible());
}
const openEditForm = ()=>{
    setStatus({status:'edit'})
    dispatch(visible());
    
}
    return (
        <div className={cls.NewsContainer}>
            {status.status==='add'?<form onSubmit={handleSubmit}>
                <ModalWindow>
                <CustomInput onChange={inputHandler} value={formData.title} name='title' style={{width:'90%'}} placeholder='Заголовок'></CustomInput>
                <CustomTextarea onChange={inputHandler} value={formData.body} name='body' placeholder='Текст новости'></CustomTextarea>
                <CustomButton type='submit'>Отправить новость</CustomButton>
                </ModalWindow>
            </form>:
            <form onSubmit={handleSubmit}>
                <ModalWindow>
                    <h1>Редактировать</h1>
                <CustomInput onChange={inputHandler} value={formData.title} name='title' style={{width:'90%'}} placeholder='Заголовок'></CustomInput>
                <CustomTextarea onChange={inputHandler} value={formData.body} name='body' placeholder='Текст новости'></CustomTextarea>
                <CustomButton type='submit'>Отправить правки</CustomButton>
                </ModalWindow>
            </form>}
            {news1.news.map(el=><NewItemContainer openEditForm={openEditForm} title={el[1].title} body={el[1].body} dateOfNew={el[1].dateOfNew} key={el[0]} id={el[0]}/>)}
            {vis==false?<CustomButton onClick={openAddForm}>Добавить новость</CustomButton>:null}

        </div>
    );
};



export default NewsContainer;