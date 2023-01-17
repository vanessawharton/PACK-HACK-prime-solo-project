import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Box from '@mui/material/Box';


function EditTrip () {
    const dispatch = useDispatch();
    const history = useHistory();

    // save the DB id of the trip to be edited
    const { id } = useParams();

    const trip = useSelector(store => store.trips[0]);

    // local state to track changes
    const [tripDetails, setTripDetails] = useState({
        title: trip?.title,
        startDate: trip?.start_date,
        endDate: trip?.end_date,
        location: trip?.location,
        id: id
    })

    // GET request dispatch on navigation or reload
    useEffect(() => {
        dispatch({ type: 'FETCH_SELECT_TRIP', payload: id});
        setTripDetails({
            title: trip?.title,
            startDate: trip?.start_date,
            endDate: trip?.end_date,
            location: trip?.location,
            id: id
        })
    }, [])

    // change handler, adjusts local state as changes occur
    const handleChangeFor = (event, propertyName) => {
        setTripDetails({
            ...tripDetails,
            [propertyName]: event.target.value
        })
    }

    // on submit click, set a PUT request dispatch to edit trip details in DB, then return to details page
    const handleSubmit = (event) => {
        event.preventDefault();
        // send request to edit details with saved local state
        dispatch({ type: 'EDIT_TRIP', payload: tripDetails })
        // send user back to details page
        history.push(`/trips/${id}`)
    }


    return (
        <div>
            <Box
                sx={{
                    margin: 'auto',
                    padding: 1,
                    width: 1000,
                    elevation: 8,
                    backgroundColor: '#faf3e8',
                    boxShadow: 12,
                    clipPath:
                    'polygon(0% 0px, 100px 0%, calc(100% - 100px) 0%, 100% 100px, 100% calc(100% - 0px), calc(100% - 100px) 100%, 100px 100%, 0 calc(100% - 100px))'
                }}>
            <center>
            <h1>Edit Trip: {trip?.title}</h1>
            </center>
            <form className="add-edit-form" onSubmit={handleSubmit}>
            <center>
                Title:
                <br />
                <input
                    type="text"
                    value={tripDetails.title}
                    onChange={(event) => handleChangeFor(event, 'title')}
                >
                </input>
                <br />
                Start Date:
                <DatePicker 
                    value={tripDetails.startDate} 
                    onChange={(event) => handleChangeFor(event, 'startDate')} 
                />

                <br />
                End Date:
                <DatePicker 
                    value={tripDetails.endDate} 
                    onChange={(event) => handleChangeFor(event, 'endDate')} 
                />

                Location:
                <br />
                <input
                    type="text"
                    value={tripDetails.location}
                    onChange={(event) => handleChangeFor(event, 'location')}
                >
                </input>
                <br />
                <button type="submit" onClick={handleSubmit}>Update Trip</button>
                <button type="submit" onClick={() => { history.push(`/trips/${id}`)}}>Cancel</button>
                </center>
                </form>
            </Box>
        </div>
    )
}

export default EditTrip;