// hooks
import { useHistory } from "react-router";

// styling
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function PackingListView( {packingList} ) {
    // bring in history for navigation on click
    const history = useHistory();

    const handleClick = () => {
        history.push(`/packinglists/${packingList.id}`);
    }

    const handleDelete = () => {
        dispatch({ type: 'DELETE_PACKING_LIST', payload: id});
        history.push('/packinglists');
    };

    return (
        <div className="card">
            <Card 
                key={packingList?.id}
                title={packingList?.title}
                sx={{ width: 800 }}
                onClick={handleClick}>
                <CardContent 
                    sx={{ 
                        fontSize: 36,
                        backgroundColor: '#4ee1e6' 
                        }}>
                    {packingList?.title}
                    <IconButton 
                        aria-label="delete"
                        edge="end"
                        onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </CardContent>
            </Card>
            <br />
        </div>
    )
}

export default PackingListView;