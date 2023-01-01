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
            <label htmlFor="start-date">
                Start Date:
                <input
                type="text"
                name="start_date"
                value={startDate}
                required
                onChange={(event) => setStartDate(event.target.value)}
                />
            </label>
        </div>
        <div>
            <label htmlFor="end-date">
                End Date:
                <input
                type="text"
                name="end_date"
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
        <div>
            <label htmlFor="packing-list-option">Packing List:
                <select>
                    <option value="" selected disabled>Choose from Dropdown</option>
                    <option value="" disabled>Use a Previous List</option>
                    <option value="">* Berlin</option>
                    <option value="">* Paris</option>
                    <option value="">* Bali</option>
                    <option value="" disabled>---OR---</option>
                    <option value="" disabled>Use a Template</option>
                    <option value="">* Weekend Getaway</option>
                    <option value="">* Summer Road Trip</option>
                    <option value="">* Standard Template</option>
                    <option value="" disabled>---OR---</option>
                    <option value="">Start From Scratch!</option>
                </select>
            </label>
        </div>
        <div>
            <input className="add-trip-btn" type="submit" name="Save" />
        </div>
    </form>
    );
}

export default TripForm;