// hooks
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ItemView from '../Items/ItemView';

function PackingListDetails() {

    const dispatch = useDispatch();
    const history = useHistory();

    // selected trip id save to DB
    const { id } = useParams();

    // Pull in current trip data from state
    const packingList = useSelector(store => store.packingLists);

    // Pull data on navigation to page or reload
    useEffect(() => {
        dispatch({ type: 'FETCH_SELECT_PACKING_LIST', payload: id});
    }, [])

    return (
        <div className="container">
            <h3>{packingList?.title}</h3>
            <br />
            <section>
                {packingList?.map(item => (
                    <ItemView key={item.id} item= {item} />
                ))}
            </section>
        </div>
    );
}

export default PackingListDetails;