import { Link } from 'react-router-dom';

const EventCard = ({ event, onDelete }) => {
    const handleDeleteClick = () => {
        onDelete(event.id);
    }
    return (
        <div className='card mb-4'>
            <div className='card-body ' >
            <Link to={`/${event.id}`} className='text-decoration-none text-dark'>
                    <div className='row align-items-center'>
                        <div className='col-md-9'>
                            <h3 className='card-title text-start'>{event.name}</h3>
                        </div>
                        <div className='col-md-3 text-end'>
                            <button onClick={handleDeleteClick} className='btn btn-danger btn-sm'>X</button>
                        </div>
                    </div>
                </Link>
                    <p className='card-text text-start'>{event.startTime} - {event.endTime}</p>
                    <p className='card-text text-start'>{event.category}</p>
                    <p className='card-text text-start'>{event.location}</p>

            </div>
        </div>
    );
}

export default EventCard;
