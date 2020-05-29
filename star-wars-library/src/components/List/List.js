import React from 'react';
import '../List/List.css'

const List = () => {
    return (
        <div className="list_with_heros">
            <div className="heros">
                <h3>Star Wars Heros</h3>
                <ul>
                    <li>
                        <p>Hero</p>
                    </li>
                    <li>
                        <p>Hero</p>
                    </li>
                    <li>
                        <p>Hero</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default List;