import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function TripForm() {
    const history = useHistory();
    const [tripTitle, setTripTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');
    const [packingList, setPackingList] = useState('');
    const dispatch = useDispatch();

    const addTrip = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_TRIP',
            payload: {
            tripTitle: tripTitle,
            startDate: startDate,
            endDate: endDate,
            location: location,
            packingList: packingList
            },
        });

        history.push('/trips');
    }; // end addTrip

    return (
    <form className="formPanel" onSubmit={addTrip}>
        <h2>:::New Trip:::</h2>
        <div>
        <label htmlFor="triptitle">
            Trip Title:
            <input
            type="text"
            name="triptitle"
            value={tripTitle}
            required
            onChange={(event) => setTripTitle(event.target.value)}
            />
        </label>
        </div>
        <div>
        <label htmlFor="startdate">
            Start Date:
            <input
            type="text"
            name="startdate"
            value={startDate}
            required
            onChange={(event) => setStartDate(event.target.value)}
            />
        </label>
        </div>
        <div>
        <label htmlFor="enddate">
            End Date:
            <input
            type="text"
            name="enddate"
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
        </div>
        <div>
            <input className="add-trip-btn" type="submit" name="save" />
        </div>
    </form>
    );
}

export default TripForm;