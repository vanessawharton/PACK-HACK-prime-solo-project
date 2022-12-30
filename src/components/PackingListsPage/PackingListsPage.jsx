import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import PackingListView from '../PackingListView/PackingListView';

function PackingListsPage() {
    const packingLists = useSelector((store) => store.packingLists);
    const history = useHistory();
    const dispatch = useDispatch();

    //GET all packing lists on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_PACK_LISTS'});
    }, []);

    return (
        <div className="packing-lists-container">
            <h2>Packing Lists:</h2>
            <button 
                type="button" 
                onClick={() => {history.push('/addpacklist');}}
                >+</button>
            <section className="packing-lists">
                {packingLists.map(packingList => (
                        <PackingListView key={packingList.id} packingList={packingList} />
                    ))}
            </section>
        </div>
    );
}

export default PackingListsPage;