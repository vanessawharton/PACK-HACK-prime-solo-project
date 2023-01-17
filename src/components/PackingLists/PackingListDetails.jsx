// hooks
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemView from '../Items/ItemView';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


function PackingListDetails() {

    const dispatch = useDispatch();

    // selected trip id save to DB
    const { id } = useParams();

    // Pull in current trip data from state
    const packingList = useSelector(store => store.packingLists);

    const [open1, setOpen1] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);
    const [open3, setOpen3] = React.useState(true);
    const [open4, setOpen4] = React.useState(true);

    const handleClick1 = () => {
        setOpen1(!open1);
    };

    const handleClick2 = () => {
        setOpen2(!open2);
    };

    const handleClick3 = () => {
        setOpen3(!open3);
    };

    const handleClick4 = () => {
        setOpen4(!open4);
    };

    // Pull data on navigation to page or reload
    useEffect(() => {
        dispatch({ type: 'FETCH_SELECT_PACKING_LIST', payload: id});
    }, [])


    return (
        <div className="packing-list-container">
            <Box
                sx={{
                    margin: 'auto',
                    mb: 30,
                    padding: 1,
                    width: 1000,
                    elevation: 8,
                    backgroundColor: '#faf3e8',
                    boxShadow: 12,
                    borderRadius: 2
                }}>
                <center>
                <h2>:: BALI PACKING LIST ::</h2>
                </center>
                        <List
                            sx={{ 
                                width: '95%', 
                                borderRadius: 2,
                                margin: 'auto',
                                mt: 3,
                                mb: 10,
                                backgroundColor: '#d3caeb' }}
                            component="nav"
                            >
                            <ListItem
                                sx={{ 
                                    backgroundColor: '#5DB7DC',
                                    color: 'rgba(68, 21, 170, 1)',
                                    fontSize: 30,
                                }}
                                onClick={handleClick1}>
                                CLOTHING
                                {open1 ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={open1} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {packingList?.filter(item => item.category === 1).map(item => (
                                        <ItemView key={item.id} item={item} />
                                    ))}
                                </List>
                            </Collapse>
                            <Divider />
                            <ListItem 
                                sx={{ 
                                    backgroundColor: '#5DB7DC',
                                    color: 'rgba(68, 21, 170, 1)',
                                    fontSize: 30,
                                }}
                                onClick={handleClick2}>
                                TOILETRIES
                                {open2 ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={open2} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                {packingList?.filter(item => item.category === 2).map(item => (
                                        <ItemView key={item.id} item={item} />
                                    ))}
                                </List>
                            </Collapse>
                            <Divider />
                            <ListItem 
                                sx={{ 
                                    backgroundColor: '#5DB7DC',
                                    color: 'rgba(68, 21, 170, 1)',
                                    fontSize: 30,
                                }}
                                onClick={handleClick3}>
                                ENTERTAINMENT
                                {open3 ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={open3} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                {packingList?.filter(item => item.category === 3).map(item => (
                                        <ItemView key={item.id} item={item} />
                                    ))}
                                </List>
                            </Collapse>
                            <Divider />
                            <ListItem 
                                sx={{ 
                                    backgroundColor: '#5DB7DC',
                                    color: 'rgba(68, 21, 170, 1)',
                                    fontSize: 30,
                                }}
                                onClick={handleClick4}>
                                MISC
                                {open4 ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={open4} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                {packingList?.filter(item => item.category === 4).map(item => (
                                        <ItemView key={item.id} item={item} />
                                    ))}
                                </List>
                            </Collapse>
                        </List>


                <Fab 
                    sx={{ position: 'fixed', top: 160, left: 470 }}
                    size="medium" 
                    color="secondary" 
                    aria-label="add">
                    <AddIcon />
                </Fab>    
            </Box>
        </div>
    );
}

export default PackingListDetails;