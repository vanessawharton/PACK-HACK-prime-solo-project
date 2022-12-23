import React from 'react';
import {useSelector} from 'react-redux';

function TripsPage() {
    const trips = useSelector((store) => store.trips);
    
    return (
        <div className="trip-container">
            <h2>My Trips</h2>
            <button>+</button>
        </div>
    );
}

// this allows us to use <App /> in index.js
export default TripsPage;