import { useDispatch } from 'react-redux';

// styling
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



function ItemView( {item} ) {
    const dispatch= useDispatch();

    const handleToggle = () => {
        dispatch({ type: 'PACK_ITEM', payload: item.id})
    };

    const handleDelete = () => {
        dispatch({ type: 'DELETE_ITEM', payload: item.id});
    };

    return (
        <center>
            <Box sx={{ width: '70%' }}>
            
        <List>
            <ListItem 
                key={item.id}
                sx= {{ bgcolor: "white" }}
                secondaryAction={
                    <Checkbox
                        edge="end"
                        onChange={handleToggle}
                    />
                }
            >
                <ListItemButton>
                    <ListItemText id={item.id} primary={item.name} />
                </ListItemButton>
                <IconButton aria-label="delete"
                    onClick={handleDelete}
                >
                    <DeleteIcon />
                </IconButton>
            </ListItem>
            <br />
        </List>
        </Box>
        </center>
        
    )
}

export default ItemView;