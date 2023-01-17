import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Box from '@mui/material/Box';

function PackingListForm() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

    const listDetails = {title: title};

    const addPackingList = (event) => {
        event.preventDefault();

        dispatch({type: 'ADD_PACKING_LIST', payload: listDetails});

        history.push('/packinglists');
    }; // end addPackingList


    return (
        <Box
        sx={{
            margin: 'auto',
            padding: 1,
            width: 1000,
            Height: 1000,
            elevation: 8,
            backgroundColor: '#faf3e8',
            boxShadow: 12,
            clipPath:
                'polygon(0% 0px, 100px 0%, calc(100% - 100px) 0%, 100% 100px, 100% calc(100% - 0px), calc(100% - 100px) 100%, 100px 100%, 0 calc(100% - 100px))'
        }}>
    <form className="formPanel">
        <center>
        <h2>:: NEW PACKING LIST ::</h2>
            <label htmlFor="title">
                Title:
                <input
                    type="text"
                    name="title"
                    value={title}
                    required
                    onChange={(event) => setTitle(event.target.value)}
                />
            </label>
            <button className="submit-btn" onClick={addPackingList}>SUBMIT</button>
        </center>
    </form>
    </Box>
    );
}

export default PackingListForm;