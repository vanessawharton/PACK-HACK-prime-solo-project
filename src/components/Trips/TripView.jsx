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
            <Card 
                key={trip?.id}
                sx={{ 
                    width: 800,
                }} 
                onClick={handleClick}
            >
                <CardContent 
                    sx={{ 
                        fontSize: 36,
                        backgroundColor: '#edbff5',
                    }}>
                    {trip?.title} : {trip?.date_diff} days
                </CardContent>
            </Card>
            <br />
        </div>
    );
}

export default TripView;