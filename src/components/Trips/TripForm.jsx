import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TripForm() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');
    const [packingList, setPackingList] = useState('');

    const tripDetails = {
        title: title,
        start_date: startDate,
        end_date: endDate,
        location: location,
        packingList: packingList
    };

    const addTrip = (event) => {
        event.preventDefault();

        dispatch({type: 'ADD_TRIP', payload: tripDetails});

        history.push('/trips');
    }; // end addTrip

    const priorOptions = [
        { value: "Paris", label: "Paris" },
        { value: "Berlin", label: "Berlin" },
        { value: "Bali", label: "Bali" }
    ];
        
    const templateOptions = [
        { value: "weekend-getaway", label: "Weekend Getaway" },
        { value: "summer-road-trip", label: "Summer Road Trip" },
        { value: "standard-template", label: "Standard Template" }
    ];
        
    const groupedOptions = [
        {
            label: "Use a Previous List",
            options: priorOptions
        },
        {
            label: "Use a Template",
            options: templateOptions
        }
    ];

    function handleChange(option) {
        console.log('in TripForm, option.value is:', option.value);
        setPackingList(option.value);
    };


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
                <DatePicker 
                    selected={startDate} 
                    required
                    onChange={(date) => setStartDate(date)} 
                />
            </label>
        </div>
        <div>
            <label htmlFor="end-date">
                End Date:
                <DatePicker 
                    selected={endDate} 
                    required
                    onChange={(date) => setEndDate(date)} 
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
                <Select
                    options={groupedOptions}
                    value={packingList} 
                    placeholder="Choose from Dropdown"
                    required
                    onChange={handleChange}
                />
            </label>
        </div>
        <div>
            <input className="add-trip-btn" type="submit" />
        </div>
    </form>
    );
}

export default TripForm;