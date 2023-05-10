/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import cls from './NewItemContainer.module.css'
import './NewItemContainerAnim.css'
import { CSSTransition} from 'react-transition-group';
const NewItemContainer = (props) => {
    const [clicked, setClicked] = useState(false);
    return (


        <div className={cls.NewItemContainer}>
 <img className={cls.news_img} src="https://mywebicons.ru/i/jpg/c1e7e76fdca082061c3ddc6ddcdb3809.jpg" alt="narcos" />
            <div className={cls.info}>
                <div className={cls.title_n_doings}>
                    <p className={cls.title}>{props.title}</p>
                    <span onClick={() => setClicked(!clicked)} className={cls.doings}>...</span>
                    <CSSTransition in={clicked} classNames='doings_list' timeout={300} mountOnEnter unmountOnExit>
                        <div className='doings_list'>
                            <span className={cls.doings_choose}>Удалить</span>
                            <span className={cls.doings_choose}>Редактировать</span>
                            
                        </div>
                    </CSSTransition>
                    
                </div>
                <div className={cls.body_group}>
                <p className={cls.body}>{props.body.length>130? `${props.body.slice(0,129)}...`:props.body } </p>
                <p className={cls.date_of_new}>{props.dateOfNew}</p>
                </div>
            </div>
            
            
        </div>
    );
};


export default NewItemContainer;