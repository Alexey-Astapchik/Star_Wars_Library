import React from 'react';
import '../Header/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <div>
                    <h1>Star Wars Guide</h1>
                </div>
                <div className='list'>
                    <ul className="d-flex list_of_items">
                        <li>
                            <a href='#'>People</a>
                        </li>
                        <li>
                            <a href='#'>Planets</a>
                        </li>
                        <li>
                            <a href='#'>Ships</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;