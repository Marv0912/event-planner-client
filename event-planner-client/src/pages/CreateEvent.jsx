import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateEvent = () => {

    // set one state for the whole data structure
    const [form, setForm] = useState({
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
        setForm((prevData) => ({
            //spread operator to get data from useState
            ...prevData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5005/events', form)
            .then((response) => {
                console.log('Event added: ', response.data);
            })
            .catch((error) => {
                console.error('Error: ', error);
            })

            navigate('/')
    }


    useEffect(() => {
        console.log(form)
    }, [form])
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
                        name="name"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                    name='description'
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div>
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <select name="category" onChange={handleInputChange}>
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
                        name="startTime"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>End Time:</label>
                    <input
                        //VERIFY TYPE
                        name="endTime"
                        type="time"
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit">Add Event</button>
            </form>
        </div>
    );
}

export default CreateEvent;
