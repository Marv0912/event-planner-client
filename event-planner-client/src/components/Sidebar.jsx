import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/create" >Create Event</Link>
                </li>
                <li>
                    <Link to="/category" >Categories</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
