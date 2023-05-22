import React, { useEffect, useState } from 'react';
import {Route,Routes} from 'react-router-dom'
import NewsContainer from '../Containers/NewsContainer/NewsContainer';
import NewFullVersion from '../Pages/NewFullVersion/NewFullVersion';
import { useDispatch, useSelector } from 'react-redux';
import { addID } from '../Redux/Redux-slices/tempIdSlice';
import Layout from '../Components/Layout/Layout';



const NewsRouter = () => {
    const dispatch = useDispatch();
   const tempId =  useSelector(state=>state.tempId.value);
  useEffect(()=> dispatch(addID({title:sessionStorage.getItem('tempIdTitle'),body:sessionStorage.getItem('tempIdBody'),tempId:sessionStorage.getItem('tempId'), dateOfNew:sessionStorage.getItem('tempIdDateOfNew')}),[]),[])

    
    return (
        <Routes>
            <Route element={<Layout/>}>
            <Route path='/' element={<NewsContainer/>}/>
            <Route path={'/'+tempId.tempId} element={<NewFullVersion title={tempId.title} body={tempId.body} dateOfNew={tempId.dateOfNew}/>}/>
            </Route>
        </Routes>
    );
};


export default NewsRouter;