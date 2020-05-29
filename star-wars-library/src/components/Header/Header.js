import React from 'react';
import '../Header/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <div>
                    <h1>Star Wars Wiki</h1>
                </div>
                <div className='list'>
                    <ul className="d-flex list_of_items">
                        <li>
                            <a>People</a>
                        </li>
                        <li>
                            <a>Planets</a>
                        </li>
                        <li>
                            <a>Ships</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;