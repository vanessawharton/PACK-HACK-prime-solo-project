// hooks
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { format } from 'date-fns';

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
            <h3>Title: {trip?.title}</h3>
            <p>Location: {trip?.location}</p>
            <p>Start Date: {trip?.start_date}</p>
            <p>End Date: {trip?.end_date}</p>
            <button
                type="button"
                className="btn btn_asLink"
                onClick={() => history.push(`/packinglists/${id}`)}>Packing List
                </button>
                <br />
                <br />
            <button className='editTripBtn' onClick={() => history.push(`/edit/${id}`)}>Edit</button>
            <button className='deleteTripBtn' onClick={handleClick}>Delete</button>
            <button className="homeBtn" onClick={() => history.push('/trips')}>Return to My Trips</button> 
            </center>
            </Box>
        </div>
    );
}

export default TripDetails;