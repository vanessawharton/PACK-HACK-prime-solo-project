// hooks
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function TripDetails() {

    const dispatch = useDispatch();
    const history = useHistory();

    // selected trip id save to DB
    const { id } = useParams();

    // Pull in current trip data from state
    const trip = useSelector(store => store.trips[0]);

    // Pull data on navigation to page or reload
    useEffect(() => {
        dispatch({ type: 'FETCH_SELECT_TRIP', payload: id});
    }, [])

    const handleClick = () => {
        dispatch({ type: 'DELETE_TRIP', payload: id});
        history.push('/trips');
    };

    return (
        <div className="detail">
            <h3>{trip?.title}</h3>
            <br />
            <p>{trip?.location}</p>
            <p>{trip?.start_date}</p>
            <p>{trip?.end_date}</p>
            <p>{trip?.packingList}</p>
            <button className='editTripBtn' onClick={() => history.push(`/edit/${id}`)}>Edit</button>
            <button className='deleteTripBtn' onClick={handleClick}>Delete</button>
            <button className="homeBtn" onClick={() => history.push('/trips')}>Return to My Trips</button> 
        </div>
    );
}

export default TripDetails;