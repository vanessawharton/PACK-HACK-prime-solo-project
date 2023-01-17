import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import PackingListsView from './PackingListsView';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

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
            <Fab 
                sx={{ position: 'absolute', top: 160, right: 600 }}
                size="large" 
                color="secondary" 
                aria-label="add">
                <AddIcon onClick={() => {history.push('/addpacklist');}}/>
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
            <h1>PACKING LISTS:</h1>
            <section className="packing-lists">
                {packingLists.map(packingList => (
                        <PackingListsView key={packingList.id} packingList={packingList} />
                    ))}
            </section>
            </center>
            </Box>
        </div>
    );
}

export default PackingListsPage;