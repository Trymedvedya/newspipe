import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const tempIdSlice = createSlice({
  name: 'tempId',
  initialState,
  reducers:{
    addID: (state,action)=>{
        state.value=action.payload
        
    },
    clearID:(state)=>{
      sessionStorage.clear()
    },
  },
})
export const {addID, clearID} = tempIdSlice.actions
export default tempIdSlice.reducer