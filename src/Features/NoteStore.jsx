import { configureStore } from "@reduxjs/toolkit";
import noteReducer from './NoteSlice'

export const store = configureStore({

    reducer:{
        noteAppReducer:noteReducer

    }   
})