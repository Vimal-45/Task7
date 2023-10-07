import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Features/NoteStore';
import Home from './Components/Home';
import Note from './Components/Note';
import Task from './Components/Task';
import Archive from './Components/Archive';
import Bin from './Components/Bin';
import Sidebar from './Components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 



const App = () => {
  return (
    <div >
         
      <Provider store={store}>
      <Sidebar/>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/note' element={<Note/>}/>
          <Route path='/task' element={<Task/>}/>
          <Route path='/archive' element={<Archive/>}/>
          <Route path='/bin' element = {<Bin/>}/>
        </Routes>      
      </Provider>
    </div>
  );
};

export default App;

