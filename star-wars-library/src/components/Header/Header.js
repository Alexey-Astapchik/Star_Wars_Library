import React from 'react';
import '../Header/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // <div className='header'>
            <div>
                <div className='logo'>
                    <h1>Star Wars Guide</h1>
                </div>
                <div className='header_nav'>
                    <div className="nav_items">
                    <ul>
                        <li>
                            <Link to='/people' href='#'>People</Link>
                        </li>
                        <li>
                            <Link to='/planets' href='#'>Planets</Link>
                        </li>
                        <li>
                            <Link to='/ships' href='#'>Starships</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        // {/* </div> */}
    )
}

export default Header;
{/* <ul className="d-flex list_of_items">
                        <li>
                            <Link to='/people' href='#'>People</Link>
                        </li>
                        <li>
                            <Link to='/planets' href='#'>Planets</Link>
                        </li>
                        <li>
                            <Link to='/ships' href='#'>Starships</Link>
                        </li>
                    </ul> */}