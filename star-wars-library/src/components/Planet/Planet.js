import React from 'react';
import '../Planet/Planet.css';

import SwapiServiceAPI from '../../services/SwapiServiceAPI'
import Loader from '../Loader/Loader';

export default class Planet extends React.Component {

    constructor() {
        super();
        this.updatePlanet();
    };

    swapi = new SwapiServiceAPI();

    state = {
        planet: {},
        load: true
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet, load:false});
    }
    updatePlanet() {
        const id = Math.round(Math.random() * 25);
        this.swapi.getPlanet(id).then(this.onPlanetLoaded);
    }

    render () {
        const {planet:{name, diameter, population, gravity, id}, load } = this.state;

        if(load){
            return <Loader/>
        }

        return (
            <div className="planet">
                <div className="random_planet">
                    <h3>Planet: {name} </h3>
                    <div>
                        <img className="pic_planet" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                        <ul>
                            <li className="diametr">
                                <span>Diametr:</span>
                                <span> {diameter} </span>
                            </li>
                            <li className="population">
                                <span>Population:</span>
                                <span> {population} </span>
                            </li>
                            <li className="gravity">
                                <span>Gravity:</span>
                                <span> {gravity}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};