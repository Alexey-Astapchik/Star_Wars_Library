import React from 'react';

import SwapiServiceAPI from '../../../services/SwapiServiceAPI'
import SwapiContext from '../../SwapiContext/SwapiContext';
import '../Starships_info/Starships_info.css';

export default class Starships_info extends React.Component {
   
    swapi = new SwapiServiceAPI();

    state = {
        ship: 1
    }

    componentDidUpdate() {
        this.updateShip();
    }

    componentDidUpdate(prevProps) {
        if(this.props.planetID !== prevProps.planetID){
            this.updateShip()
        }
    }

    updateShip() {
        const { shipID } = this.props;

        if(!shipID){
            return;
        }
        this.swapi.getShip(shipID).then((ship) => {
            this.setState({ship});
        })
    }
    
    render() {
        if(!this.state.ship) {
            return <p>Please, select a ship</p>
        }

        const { id, name, model, cargo_capacity, consumables} = this.state.ship;

        return (
            <div className="hero_infos">
                <div className="block-with-info">
                    <h3>The Information about starship:</h3>
                    <h4>{name}</h4>
                    <div className="info_list">
                    <img className="pic_hero" src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}/>
                        <ul>
                            <li className="mass">
                                <p className='parametr'>Name:</p>
                                <p>{name}</p>
                            </li>
                            <li className="skin">
                                <p className='parametr'>Model:</p>
                                <p>{model}</p>
                            </li>
                            <li className="mass">
                                <p>Cargo:</p>
                                <p> {cargo_capacity} </p>
                            </li>
                            <li className="mass">
                                <p>Consumables:</p>
                                <p> {consumables}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

Starships_info.contextType = SwapiContext;