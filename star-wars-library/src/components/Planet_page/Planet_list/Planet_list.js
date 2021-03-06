import React from 'react';
import '../Planet_list/Planet_list.css';
import SwapiServiceAPI from '../../../services/SwapiServiceAPI'
import Loader from '../../Loader/Loader';
import withData from '../../helpers/withData'

const  Planet_List = (props) => {

    const {data, onItemClick, renderItem} = props;


    const renderList = (arr) => {
        return arr.map((planet) => {
            const text = renderItem(planet);
            return (
                <li className="hero_item_info" 
                    key= {planet.id}
                    onClick={() => onItemClick(planet.id)}>
                    <p>
                        {text}
                    </p>
                </li>
            )
        })
    }

    const items = renderList(data)

    return(
        <div className="list_with_heros">
            <div className="heros">
                <h3>Planets</h3>
                    <ul>
                        {items}
                    </ul>
            </div>
        </div>
    );
}


const {getAllPlanet} = new SwapiServiceAPI();

export default withData(Planet_List, getAllPlanet);

