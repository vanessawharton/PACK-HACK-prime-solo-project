import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import Box from '@mui/material/Box';
import "react-datepicker/dist/react-datepicker.css";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Popper from '@mui/material/Popper';

function TripForm() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');
    const [option, setOption] = useState('');

    const tripDetails = {
        title: title,
        start_date: startDate,
        end_date: endDate,
        location: location
    };

    const addTrip = (event) => {
        event.preventDefault();

        dispatch({type: 'ADD_TRIP', payload: tripDetails});

        history.push('/packinglists/5');
    }; // end addTrip

    const priorOptions = [
        { value: 1, label: "Chicago" },
        { value: 2, label: "Paris" },
        { value: 3, label: "Hawaii" },
        { value: 4, label: "Berlin" }
    ];
        
    const templateOptions = [
        { value: 4, label: "Weekend Getaway" },
        { value: 5, label: "Summer Road Trip" },
        { value: 6, label: "Standard Template" }
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

    const handleChange = (event) => {
        console.log('in TripForm, option.value is:', event.target.value);
        setOption(event.target.value);
    };


    return (
        <Box
            sx={{
                margin: 'auto',
                padding: 1,
                width: 1000,
                overflow: 'auto',
                elevation: 8,
                backgroundColor: '#faf3e8',
                boxShadow: 12,
                clipPath:
                    'polygon(0% 0px, 100px 0%, calc(100% - 100px) 0%, 100% 100px, 100% calc(100% - 0px), calc(100% - 100px) 100%, 100px 100%, 0 calc(100% - 100px))'
            }}>
        <form className="formPanel" onSubmit={addTrip}>
        <center>
        <h2>:: NEW TRIP ::</h2>
        <div>
            <label htmlFor="title">
                Trip Title:
                <br />
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
                <br />
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
                <br />
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
                <br />
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
            <label htmlFor="packing-list-option">
                Packing List:
                <br />
            <FormControl 
                fullWidth
                variant="standard"
            >
                <InputLabel id="packing-list-option-label"></InputLabel>
                <Select
                    labelId="packing-list-option-label"
                    id="packing-list-option"
                    options={groupedOptions}
                    value={option.value} 
                    renderValue={option.label}
                    required
                    autoWidth
                    onChange={handleChange}
                />
                </FormControl>
            </label>
        </div>
        <br />
            <button className="submit-btn">SUBMIT</button>
        </center>
    </form>
    </Box>
    );
}

export default TripForm;