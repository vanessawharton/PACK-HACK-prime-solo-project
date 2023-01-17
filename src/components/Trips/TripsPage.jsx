import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import TripView from './TripView';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';


export default function TripsPage() {
    const trips = useSelector((store) => store.trips);
    const history = useHistory();
    const dispatch = useDispatch();


    //GET all trips on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_TRIPS'});
    }, []);


    return (
        <div className="trip-container">
            <Fab 
                sx={{ position: 'absolute', top: 160, right: 600 }}
                size="large" 
                color="secondary" 
                aria-label="add">
                    <AddIcon 
                    onClick={() => {history.push('/addtrip');}}
                    />
            </Fab>
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
            <h1>MY TRIPS</h1>
            <br />
            <section className="trips">
                {trips.map(trip => (
                        <TripView key={trip.id} trip={trip} />
                    ))}
            </section>
            </center>
            </Box>
        </div>
    );
};