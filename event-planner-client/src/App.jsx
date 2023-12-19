import CreateEvent from './pages/CreateEvent'
import CategoryView from './pages/CategoryView'
import EditEvent from './pages/EditEvent'
import EventDetails from './pages/EventDetails'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'

import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5005/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events: ', error)
      })
  }, []);

  return (
    <div className='app-container'>
        <Navbar className='navbar'/>
      <div className='main-container' >
      <Sidebar />
        <Routes>
          <Route path="/" element={<Home events={events} />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/category" element={<CategoryView />} />
          <Route path="/:id" element={<EventDetails />} />
          <Route path="/:id/edit" element={<EditEvent />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
