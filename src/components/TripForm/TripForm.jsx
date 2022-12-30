import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function TripForm() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');
    // const [packingList, setPackingList] = useState('');

    const tripDetails = {
        title: title,
        start_date: startDate,
        end_date: endDate,
        location: location,
    };

    const addTrip = (event) => {
        event.preventDefault();

        dispatch({type: 'ADD_TRIP', payload: tripDetails});

        history.push('/trips');
    }; // end addTrip

    return (
    <form className="formPanel" onSubmit={addTrip}>
        <h2>:::New Trip:::</h2>
        <div>
            <label htmlFor="title">
                Trip Title:
                <input
                type="text"
                name="title"
                value={title}
                required
                onChange={(event) => setTitle(event.target.value)}
                />
            </label>
        </div>
        <div>
            <label htmlFor="startDate">
                Start Date:
                <input
                type="text"
                name="startDate"
                value={startDate}
                required
                onChange={(event) => setStartDate(event.target.value)}
                />
            </label>
        </div>
        <div>
            <label htmlFor="endDate">
                End Date:
                <input
                type="text"
                name="endDate"
                value={endDate}
                required
                onChange={(event) => setEndDate(event.target.value)}
                />
            </label>
        </div>
        <div>
            <label htmlFor="location">
                Location:
                <input
                type="text"
                name="location"
                value={location}
                required
                onChange={(event) => setLocation(event.target.value)}
                />
            </label>
        </div>
        {/* <div>
            <label htmlFor="packinglistoption">
                Packing List:
                <input
                type="dropdown"
                name="packinglist"
                value={packingList}
                required
                onChange={(event) => setPackingList(event.target.value)}
                />
            </label>
        </div> */}
        <div>
            <input className="add-trip-btn" type="submit" name="Save" />
        </div>
    </form>
    );
}

export default TripForm;