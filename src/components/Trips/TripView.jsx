// hooks
import { useHistory } from "react-router";
import DateCountdown from 'react-date-countdown-timer';


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
                sx={{ width: 800 }} 
                onClick={handleClick}
            >
                <CardContent sx={{ fontSize: 36 }}>
                    {trip?.title} 
                    {/* <DateCountdown dateTo= {trip?.startDate} /> */}
                </CardContent>
            </Card>
            <br />
        </div>
    );
}

export default TripView;