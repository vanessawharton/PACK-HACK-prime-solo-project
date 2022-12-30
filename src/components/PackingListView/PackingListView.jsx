// hooks
import { useHistory } from "react-router";

// styling
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function PackingListView( {packingList} ) {
    // bring in history for navigation on click
    const history = useHistory();

    const handleClick = () => {
        history.push(`/packingLists/${packingList.id}`);
    }

    return (
        <div className="card">
            <Card key={packingList?.id} onClick={handleClick}>
                <CardContent>
                    {packingList?.title}
                </CardContent>
            </Card>
        </div>
    )
}

export default PackingListView;