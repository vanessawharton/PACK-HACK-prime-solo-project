import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import TripView from './TripView';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function TripsPage() {
    const trips = useSelector((store) => store.trips);
    const history = useHistory();
    const dispatch = useDispatch();

    //GET all trips on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_TRIPS'});
    }, []);

    return (
        <div className="trip-container">
            <h2>My Trips</h2>
            <Fab size="medium" color="secondary" aria-label="add">
                <AddIcon 
                onClick={() => {history.push('/addtrip');}}
                />
            </Fab>
            <section className="trips">
                {trips.map(trip => (
                        <TripView key={trip.id} trip={trip} />
                    ))}
            </section>
        </div>
    );
}

export default TripsPage;