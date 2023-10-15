import { createSlice } from '@reduxjs/toolkit'
// import Data from './Data.json'

const initialState = {
  archiveItems : [],
  deletedItems : [],
  user:[],
  value:[],    
  value2:[]
}

const NoteSlice = createSlice({
  name: "noteApp",
  initialState,
  reducers: {

    fetchData: (state, action) => {
      state.user = action.payload.user;
      state.value = action.payload.value;
      state.value2= action.payload.value2;
      state.archiveItems = action.payload.archiveItems;
      state.deletedItems = action.payload.deletedItems
      console.log(state);

    },

    addNote: (state, action) => {

      const id = 4 + Math.floor(Math.random() * 300);
      console.log(action.payload.currentTime)
      state.value = [...state.value, { id: id,
         Title: action.payload.title, 
         Note: action.payload.note, 
         Time :action.payload.currentTime }]



    },
    addTask: (state, action) => {
      // console.log ( action.payload.date)
      state.value2 = [...state.value2, { Task: action.payload.task, setDay :action.payload.date }]


    },
    UPDATE: (state, action) => {
      // console.log(action.payload);
      state.value = state.value.map((item) => {
        if (item.id === action.payload.id) {

          return {
            ...item,
            Title: action.payload.Title,
            Note: action.payload.Note
          }
        }
        return item
      });
    },
    DELETE: (state, action) => {
      // console.log(action.payload);
      state.value = state.value.filter(item => item.id !== action.payload.id)

      state.deletedItems.push(action.payload)
      console.log(action.payload)


    },
    ARCHIVE: (state, action) => {
      // console.log(action.payload);
      state.archiveItems.push({ Task: action.payload })
    }

  }


})

export const { addNote, addTask, UPDATE, DELETE, ARCHIVE, fetchData } = NoteSlice.actions;
export default NoteSlice.reducer;
