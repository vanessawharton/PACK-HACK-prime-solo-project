import { useDispatch } from 'react-redux';
import { useState } from 'react';

// styling
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import InlineEdit from '../Items/InlineEdit';
import Divider from '@mui/material/Divider';



function ItemView( {item} ) {
    const dispatch= useDispatch();

    const [value, setValue] = useState();

    const handleToggle = () => {
        dispatch({ type: 'PACK_ITEM', payload: item.id})
    };

    const handleDelete = () => {
        dispatch({ type: 'DELETE_ITEM', payload: item.id});
    };


    return (
        <center>
        <Box sx={{ 
            width: '82%',
            }}>
            <List>
                <Divider />
                <ListItem 
                    sx={{ backgroundColor: '#faf3e8' }}
                    key={item.id}>
                    <Checkbox
                        edge="start"
                        onChange={handleToggle}
                    />
                    <ListItemButton>
                        <InlineEdit value={item.name} setValue={setValue} />
                    </ListItemButton>
                    <IconButton 
                        aria-label="delete"
                        onClick={handleDelete}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
                <Divider />
            </List>
        </Box>
        </center>
    )
}

export default ItemView;