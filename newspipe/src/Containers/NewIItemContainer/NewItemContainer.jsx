/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import cls from './NewItemContainer.module.css'
import './NewItemContainerAnim.css'
import { CSSTransition} from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { removeNews} from '../../Redux/Redux-slices/newsSlice';
import { NavLink } from 'react-router-dom';
import { addID, clearID } from '../../Redux/Redux-slices/tempIdSlice';
const NewItemContainer = (props) => {
    const [clicked, setClicked] = useState(false);
   const dating = new Date(props.dateOfNew).toLocaleDateString();
   const news = useSelector(state=>state.news);

   const dispatch = useDispatch();
    const throwData = () =>{
        dispatch(clearID())
        sessionStorage.setItem('tempIdTitle',props.title);
        sessionStorage.setItem('tempIdBody',props.body);
        sessionStorage.setItem('tempIdDateOfNew',dating)
        sessionStorage.setItem('tempId',props.id)
        dispatch(addID({title:sessionStorage.getItem('tempIdTitle'),body:sessionStorage.getItem('tempIdBody'),tempId:sessionStorage.getItem('tempId'), dateOfNew:sessionStorage.getItem('tempIdDateOfNew')}))
    }
    return (
        <div className={cls.NewItemContainer}>
 <img className={cls.news_img} src="https://icdn.lenta.ru/images/2021/11/23/16/20211123162551123/square_1280_13becfb302182f48dd5ce21746297e5f.jpg" alt="narcos" />
            <div className={cls.info}>
                <div className={cls.title_n_doings}>
                    <p onClick={()=>throwData()} className={cls.title}><NavLink className={cls.NavLink} to={'/'+props.id}>{props.title}</NavLink></p>
                  
                    <span onClick={() => setClicked(!clicked)} className={cls.doings}>...</span>
                    <CSSTransition in={clicked} classNames='doings_list' timeout={300} mountOnEnter unmountOnExit>
                        <div className='doings_list'>
                            <span onClick={()=>dispatch(removeNews(props.id))} className={cls.doings_choose}>Удалить</span>
                        </div>
                    </CSSTransition>
                    
                </div>
                <div className={cls.body_group}>
                <p className={cls.body}>{props.body.length>130? `${props.body.slice(0,129)}...`:props.body } </p>
                <p className={cls.date_of_new}>{dating}</p>
                </div>
            </div>
            
            
        </div>
    );
};


export default NewItemContainer;