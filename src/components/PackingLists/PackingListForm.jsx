import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

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
    <form className="formPanel">
        <center>
        <h2>:::New Packing List:::</h2>
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
            <button className="submit-btn" onClick={addPackingList}>Submit</button>
        </center>
    </form>
    );
}

export default PackingListForm;