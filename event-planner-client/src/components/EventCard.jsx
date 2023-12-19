import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
    return (
        <div>
            <Link to={`/${event.id}`} >
                <h3>{event.name}</h3>
                <p>{event.startTime} - {event.endTime}</p>
                <p>{event.category}</p>
                <p>{event.location}</p>
            </Link>

        </div>
    );
}

export default EventCard;
