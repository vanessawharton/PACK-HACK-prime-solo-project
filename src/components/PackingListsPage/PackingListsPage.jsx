import React from 'react';
import {useSelector} from 'react-redux';

function PackingListsPage() {
    const trips = useSelector((store) => store.trips);
    
    return (
        <div className="packing-lists-container">
            <h2>Packing Lists:</h2>
            <button>+</button>
        </div>
    );
}

// this allows us to use <App /> in index.js
export default PackingListsPage;