import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

function WelcomeComponent() {
    const [, setClick] = useState(false);
    const changeSite = () => setClick(false);

    return (
        <div>
            <header className='primary-header'>
                <nav className='navbar-container'>
                    <img src="baby-yoda-logo.jpg" alt="babyYoda" className='navbar-pic' />
                    <ul>
                        <li className="link-2">
                            <Link
                                to='/characters'
                                className='nav-links'
                                onClick={changeSite}
                            >
                                Characters
                            </Link>
                        </li>
                        <li className="link-3">
                            <Link
                                to='/planets'
                                className='nav-links'
                                onClick={changeSite}
                            >
                                Planets
                            </Link>
                        </li>
                        <li className="link-4">
                            <Link
                                to='/starships'
                                className='nav-links'
                                onClick={changeSite}
                            >
                                Starships
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default WelcomeComponent;