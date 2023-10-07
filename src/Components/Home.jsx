import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ARCHIVE, DELETE, UPDATE } from '../Features/NoteSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {


    const { value, value2 } = useSelector(state => state.noteAppReducer);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [editedNote, setEditedNote] = useState({ id: '', Title: '', Note: '' });
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const openEditModal = (note) => {
        console.log(note)
        setEditedNote(note);
        setShowModal(true);
    };

    const closeEditModal = () => {
        setShowModal(false);
    };

    const saveChanges = () => {
        dispatch(UPDATE(editedNote));
        closeEditModal();
    };


    return (


        <>
            <div className='container'>
                <h2>Welcome Vimal D</h2>
                <h3> <i className="bi bi-journal-text"></i> My Notes</h3>
                <p>Recently viewed</p>
                <Slider {...settings}>
                    {value.map((val, index) => (
                        <div key={index}>
                            <Card style={{ width: 317, height: 263, boxShadow: '8px 5px 10px -2px rgba(0, 0, 0, 0.2)', borderRadius: '15px' }}>
                                <Card.Body>
                                    <Card.Title> <p> {val.Title}</p> <p> <Button className='button' onClick={() => {
                                        openEditModal(val);
                                    }} ><i className="bi bi-pencil"></i> </Button>
                                        <Button className='button' onClick={() => {
                                            if (window.confirm(`Confirm Delete ${val.Title} `)) {
                                                dispatch(DELETE({ id: val.id, Title: val.Title, Note: val.Note }))

                                            }

                                        }}><i className="bi bi-trash" ></i> </Button> </p> </Card.Title>
                                    <Card.Text>
                                        <p className='notes'>{val.Note} </p>
                                        <p className='time'>{val.Time}</p>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>

                    ))}
                </Slider>
                {/* task section..............................................              */}
                <h3> <i className="bi bi-check2-circle"></i> My Tasks</h3>
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
            {/* pop up inputs....................................................... */}
            <Modal show={showModal} onHide={closeEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>

                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={editedNote.Title}
                            onChange={(e) => setEditedNote({ ...editedNote, Title: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Note</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={editedNote.Note}
                            onChange={(e) => setEditedNote({ ...editedNote, Note: e.target.value })}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeEditModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>



        </>
    );
};

export default Home;
