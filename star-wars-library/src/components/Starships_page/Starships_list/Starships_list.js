import React from 'react';

import '../Starships_list/Starships_list.css';
import SwapiServiceAPI from '../../../services/SwapiServiceAPI'
import Loader from '../../Loader/Loader';
import withData from '../../helpers/withData'

const  Starships_list = (props) => {

    const {data, onItemClick, renderItem} = props;


    const renderList = (arr) => {
        return arr.map((ship) => {
            const text = renderItem(ship);
            return (
                <li className="hero_item_info" 
                    key= {ship.id}
                    onClick={() => onItemClick(ship.id)}>
                    <p>
                        {text}
                    </p>
                </li>
            )
        })
    }

    const items = renderList(data);

    return(
        <div className="list_with_heros">
            <div className="heros">
                <h3>Starships</h3>
                    <ul>
                        {items}
                    </ul>
            </div>
        </div>
    );
}


const {getAllShips} = new SwapiServiceAPI();

export default withData(Starships_list, getAllShips);

