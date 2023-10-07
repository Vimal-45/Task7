import React from 'react';
import {useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';






const Bin = () => {
    const { archiveItems } = useSelector(state => state.noteAppReducer);
      
    return (
        <div className='container' >
            <h2>Archive Items</h2>
            <ul>
                {archiveItems.map((val, index) => (
                    <div key={index}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                           
                            <Card.Text>
                            {val.Task}
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