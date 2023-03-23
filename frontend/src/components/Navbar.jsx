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
                    <Link
                        to='/'                        
                        onClick={changeSite}
                    >
                        <img src="baby-yoda-logo.jpg" alt="babyYoda" className='navbar-pic' />
                        </Link>
                        <ul>
                            <li className="link-2">
                                <Link
                                    to='/characters'                                    
                                    onClick={changeSite}
                                >
                                    Characters
                                </Link>
                            </li>
                            <li className="link-3">
                                <Link
                                    to='/planets'                                    
                                    onClick={changeSite}
                                >
                                    Planets
                                </Link>
                            </li>
                            <li className="link-4">
                                <Link
                                    to='/starships'                                    
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