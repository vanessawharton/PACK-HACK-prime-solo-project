import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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
            <h3>Edit Trip: {trip?.title}</h3>
            <form className="add-edit-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="title"
                    value={tripDetails.title}
                    onChange={(event) => handleChangeFor(event, 'title')}
                >
                </input>

                {/* <DatePicker 
                    value={tripDetails.startDate} 
                    onChange={(event) => handleChangeFor(event, 'startDate')} 
                /> */}
                <input
                    type="text"
                    placeholder="Start Date"
                    value={tripDetails.startDate}
                    onChange={(event) => handleChangeFor(event, 'startDate')}
                >
                </input>

                <input
                    type="text"
                    placeholder="End Date"
                    value={tripDetails.endDate}
                    onChange={(event) => handleChangeFor(event, 'endDate')}
                >
                </input>

                <input
                    type="text"
                    placeholder="Location"
                    value={tripDetails.location}
                    onChange={(event) => handleChangeFor(event, 'location')}
                >
                </input>

                <button type="submit" onClick={handleSubmit}>Update Trip</button>
            </form>
            <button type="submit" onClick={() => { history.push(`/trips/${id}`)}}>Cancel</button>
        </div>
    )
}

export default EditTrip;