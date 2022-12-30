// hooks
import { useHistory } from "react-router";

// styling
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function TripView( {trip} ) {
    // bring in history for navigation on click
    const history = useHistory();

    const handleClick = () => {
        history.push(`/trips/${trip.id}`);
    }

    return (
        <div className="card">
            <Card key={trip?.id} onClick={handleClick}>
                <CardContent>
                    {trip?.title}
                    <br />
                    // ADD COUNTDOWN
                </CardContent>
            </Card>
        </div>
    )
}

export default TripView;