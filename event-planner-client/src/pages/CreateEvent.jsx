import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateEvent = () => {

    // set one state for the whole data structure
    const [formData, setFormData] = useState({
        name: '',
        category: 'Important',
        date: '',
        startTime: '',
        endTime: '',
        location: '',
        description: '',
    });
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        // destructure to get name and value of field
        const { name, value } = e.target;
        setFormData((formData) => ({
            //spread operator to get data from useState
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('url', formData)
            .then((response) => {
                console.log('Event added: ', response.data);
            })
            .catch((error) => {
                console.error('Error: ', error);
            })

            navigate('/')
    }

    return (
        <div>
            <Link to={"/"}>
                <button>Back</button>
            </Link>

            <h2>Create Event</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={formData.description}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div>
                    <label>Location</label>
                    <input
                        type="text"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <select value={formData.category} onChange={handleInputChange}>
                        <option value="Important">Important</option>
                        <option value="Family">Family</option>
                        <option value="Work">Work</option>
                        <option value="Free-Time">Free-Time</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Start Time:</label>
                    <input
                        //VERIFY TYPE
                        type="time"
                        value={formData.startTime}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>End Time:</label>
                    <input
                        //VERIFY TYPE
                        type="time"
                        value={formData.endTime}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit">Add Event</button>
            </form>
        </div>
    );
}

export default CreateEvent;
