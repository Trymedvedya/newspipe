import React, { useEffect, useState } from 'react';
import cls from './NewFullVersion.module.css'
import CustomTextarea from '../../Components/CustomTextarea/CustomTextarea';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { editNews } from '../../Redux/Redux-slices/newsSlice';
import { addID } from '../../Redux/Redux-slices/tempIdSlice';
const NewFullVersion = (props) => {
    const news = useSelector(state => state.news);
    const dispatch = useDispatch();
    const [Edit, setEdit] = useState({
        title: false,
        titleInput: '',
        body: false,
        bodyInput: '',
        both:false
    })
    const handleChange = (e) => {
        setEdit(prevState => { return { ...prevState, [e.target.name]: e.target.value } })
    }
    const sendTitleEdit = () => {
        sessionStorage.setItem('tempIdTitle', Edit.titleInput)
        dispatch(editNews({ title: Edit.titleInput, id: sessionStorage.getItem('tempId') }))
        dispatch(addID({ title: sessionStorage.getItem('tempIdTitle'), body: sessionStorage.getItem('tempIdBody'), tempId: sessionStorage.getItem('tempId'), dateOfNew: sessionStorage.getItem('tempIdDateOfNew') }))
        setEdit({title:Edit.body, body:!Edit.title})
    }

    const sendBodyEdit = () => {
        sessionStorage.setItem('tempIdBody', Edit.bodyInput)
        dispatch(editNews({ body: Edit.bodyInput, id: sessionStorage.getItem('tempId') }))
        dispatch(addID({ title: sessionStorage.getItem('tempIdTitle'), body: sessionStorage.getItem('tempIdBody'), tempId: sessionStorage.getItem('tempId'), dateOfNew: sessionStorage.getItem('tempIdDateOfNew') }))
        setEdit({title:!Edit.body,body:Edit.title})
    }

    useEffect(() => {
        setEdit({ body: Edit.body, title: Edit.title, titleInput: sessionStorage.getItem('tempIdTitle'), bodyInput: sessionStorage.getItem('tempIdBody') })
    }, [Edit.title,Edit.body])

    return (
        <div className={cls.NewFullVersion_Cont}>
            <div className={cls.NewFullVersion}>
                {Edit.title === false ? <h1 onClick={() => sendBodyEdit()} className={cls.title}>{props.title}</h1> :
                    <div className={cls.edit_title}> <textarea onChange={handleChange} name='titleInput' className={cls.title_edit} value={Edit.titleInput} />
                        <CustomButton onClick={sendTitleEdit}>Завершить редактирование</CustomButton>
                    </div>
                }
                {Edit.body === false ? <p onClick={() => sendTitleEdit()} className={cls.body}>{props.body}</p> :
                    <div className={cls.edit_title}> <textarea onChange={handleChange} name='bodyInput' className={cls.body_edit} value={Edit.bodyInput} />
                        <CustomButton onClick={sendBodyEdit}>Завершить редактирование</CustomButton>
                    </div>
                }
                <pre className={cls.date_of_new}>{props.dateOfNew}</pre>
            </div>
        </div>
    );
};



export default NewFullVersion;