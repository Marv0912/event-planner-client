import { CreateEvent } from './pages/CreateEvent'
import { CategoryView } from './pages/CategoryView'
import { EditEvent } from './pages/EditEvent'
import { EventDetails } from './pages/EventDetails'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import './App.css'

function App() {


  return (
    <>
    <Navbar />
    <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<CreateEvent />} />
        <Route path="/" element={<CategoryView />} />
        <Route path="/" element={<EventDetails />} />
        <Route path="/" element={<EditEvent />} />

      </Routes>

    </>
  )
}

export default App
