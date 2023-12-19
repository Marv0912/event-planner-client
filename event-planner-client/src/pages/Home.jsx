import EventCard from "../components/EventCard";

const Home = ({ events }) => {
    return (
        <div>
            <h1>Events:</h1>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <EventCard event={event} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
