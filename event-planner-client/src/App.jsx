import CreateEvent from './pages/CreateEvent'
import CategoryView from './pages/CategoryView'
import EditEvent from './pages/EditEvent'
import EventDetails from './pages/EventDetails'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'

import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/category" element={<CategoryView />} />
        <Route path="/details" element={<EventDetails />} />
        <Route path="/edit" element={<EditEvent />} />

      </Routes>

      </div>
      )
}

export default App;
