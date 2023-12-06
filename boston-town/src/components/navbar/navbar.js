import { Button } from 'antd';
import { Link } from 'react-router-dom';
import "./navbar.css";


const Navbar = () => {
    return (
        <>
            <h3>Navbar!</h3>
            <nav>
                <ul>
                    <li><Link to="/signup">signup</Link></li>
                    <li><Link to="/login">login</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;