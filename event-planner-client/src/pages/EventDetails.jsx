import { useEffect, useState  } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5005/events/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching event details: ', error);
      })
  }, [id]);

  if (event === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Event Details</h2>
      <p>{event.name}</p>
      <p>{event.date}</p>
      <p>{event.startTime} - {event.endTime}</p>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{event.category}</p>
      <p>{event.name}</p>

        <Link to={`/${id}/edit`}>
        <button>Edit button</button>
        </Link>
    </div>
  );
}

export default EventDetails;
