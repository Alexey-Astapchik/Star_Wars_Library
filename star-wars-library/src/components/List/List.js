import React from 'react';
import '../List/List.css'
import SwapiServiceAPI from '../../services/SwapiServiceAPI';
import Loader from '../Loader/Loader';
import withData from '../helpers/withData'

const  List = (props) => {

    const {data, onItemClick, renderItem} = props;


    const renderList = (arr) => {
        return arr.map((item) => {
            const text = renderItem(item);
            return (
                <li className="hero_item_info" 
                    key= {item.id}
                    onClick={() => onItemClick(item.id)}>
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
                <h3>Star Wars Heros</h3>
                    <ul>
                        {items}
                    </ul>
            </div>
        </div>
    );
}


const {getPeople} = new SwapiServiceAPI();

export default withData(List, getPeople);