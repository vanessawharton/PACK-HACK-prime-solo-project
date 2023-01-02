// hooks
import { useHistory } from "react-router";

// styling
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


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
                    <button className='deleteListBtn' onClick={handleDelete}>Delete</button>
                </CardContent>
            </Card>
        </div>
    )
}

export default PackingListView;