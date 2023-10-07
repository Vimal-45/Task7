import React from 'react';
import {useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';






const Bin = () => {
    const { deletedItems } = useSelector(state => state.noteAppReducer);
        // console.log("deletedItem", deletedItems);
    return (
        <div className='container' >
            <h2>Deleted Items</h2>
            <ul>
                {deletedItems.map((val, index) => (
                    <div key={index}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title> {val.Title} </Card.Title>
                            <Card.Text>
                                {val.Note}
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </div>
                ))}
            </ul>

        </div>
    );
};

export default Bin;