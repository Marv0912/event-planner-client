
const Home = ({ events }) => {
    return (
        <div>
            <h1>Events:</h1>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                        <p>{event.startTime} - {event.endTime}</p>
                        <p>{event.category}</p>
                        <p>{event.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
