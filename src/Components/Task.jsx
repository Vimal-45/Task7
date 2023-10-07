import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../Features/NoteSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ARCHIVE } from '../Features/NoteSlice';


const Task = () => {
    const { value2 } = useSelector(state => state.noteAppReducer);
    const [task, setTask] = useState('')
    const [date, setDate] = useState('')
    const dispatch = useDispatch()

    const myRef = useRef()

    useEffect(() => {
        myRef.current.focus()

    }, [])

    return (

        <>
            <div className="empty"></div>
            <div className='container ' >
                <div className='noteCom'>
                    <h2>Add a Task</h2><br />
                    <input type="text" placeholder='Add a task...' className="form-control" value={task} ref={myRef} onChange={(e) => setTask(e.target.value)} />
                    <input type="date" className="custom-date-input form-control " value={date} onChange={(e) => setDate(e.target.value)} />

                    <br />
                    <Button onClick={() => {
                        // console.log(!task);
                        if (!task) {
                            return
                        }
                        dispatch(addTask({ task: task, date: date }))
                        setTask('')
                        setDate('')

                    }} >SAVE</Button>
                </div>    <br />


                {/* created task section----------------------------------------        */}
                <div>
                    <h3  > <i className="bi bi-check2-circle"></i> My Tasks</h3>
                    <div className='taskSection'>
                        <div className='cardContainer'>
                            {value2.map((val, index) => (
                                <div className='taskbox' key={index}>
                                    <Card >
                                        <Card.Body style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px -1px 10px 4px', borderRadius: "10px" }} >
                                            <i className="bi bi-circle"></i>
                                            <p className='taskContent' >

                                                <span className='taskTitle'>  {val.Task}</span>
                                                <span className='taskday' > {val.setDay} </span>
                                            </p>


                                            <Button className='button' onClick={() => {

                                                dispatch(ARCHIVE(val.Task))
                                            }}>  <i className="bi bi-star"></i></Button> </Card.Body>

                                    </Card>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Task;