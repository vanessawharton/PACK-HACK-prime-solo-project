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
            <Card key={packingList?.id} onClick={handleClick}>
                <CardContent>
                    {packingList?.title}
                    <IconButton 
                        aria-label="delete"
                        onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </CardContent>
            </Card>
        </div>
    )
}

export default PackingListView;