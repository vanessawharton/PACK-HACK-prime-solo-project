import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import PackingListsView from './PackingListsView';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function PackingListsPage() {
    const packingLists = useSelector((store) => store.packingLists);
    const history = useHistory();
    const dispatch = useDispatch();

    //GET all packing lists on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_PACKING_LISTS'});
    }, []);

    return (
        <div className="packing-lists-container">
            <center>
            <h1>Packing Lists:</h1>
            <Fab size="medium" color="secondary" aria-label="add">
                <AddIcon 
                onClick={() => {history.push('/addpacklist');}}
                />
            </Fab>
            <section className="packing-lists">
                {packingLists.map(packingList => (
                        <PackingListsView key={packingList.id} packingList={packingList} />
                    ))}
            </section>
            </center>
        </div>
    );
}

export default PackingListsPage;