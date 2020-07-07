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
        if(this.props.shipID !== prevProps.shipID){
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
                        <div className="pic_hero">
                        <img  src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}/>
                        </div>
                        <div className='parameters_list'>
                            <ul>
                                <li className="mass">
                                    <p className='parametr'>Name:</p>
                                    <span>{name}</span>
                                </li>
                                <li className="skin">
                                    <p className='parametr'>Model:</p>
                                    <span>{model}</span>
                                </li>
                                <li className="mass">
                                    <p>Cargo:</p>
                                    <span> {cargo_capacity} </span>
                                </li>
                                <li className="mass">
                                    <p>Consumables:</p>
                                    <span> {consumables}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Starships_info.contextType = SwapiContext;