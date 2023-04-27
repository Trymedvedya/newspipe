import React, { useState } from 'react'
import './App.css'
import ModalWindow from './Components/ModalWindow/ModalWindow'
import CustomInput from './Components/CustomInput/CustomInput'
import CustomButton from './Components/CustomButton/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { visible } from './Redux/Redux-slices/visibleSlice'
import CustomCheckbox from './Components/CustomCheckbox/CustomCheckbox'
function App() {
  useSelector(state=>state.visibility.value)
  const dispatch = useDispatch();
  return (
    <div>
    <ModalWindow>
      <CustomInput/>
      <CustomCheckbox/>
      <CustomButton>ПИСЯ</CustomButton>
    </ModalWindow>
    <CustomButton onClick={()=>dispatch(visible())} >Открыть</CustomButton>
    </div>
  )
}

export default App
