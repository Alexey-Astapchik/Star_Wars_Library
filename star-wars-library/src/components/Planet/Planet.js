import React from 'react';
import '../Planet/Planet.css';

import SwapiServiceAPI from '../../services/SwapiServiceAPI'

export default class Planet extends React.Component {

    constructor() {
        super()
        this.updatePlanet()
    }

    swapi = new SwapiServiceAPI ();

    state = {
        name: null,
        diameter: null,
        population: null,
        gravity: null
    }

    updatePlanet() {
        this.swapi.getPlanet(2).then((planet) =>{
            this.setState({
                name: planet.name,
                diameter: planet.diameter,
                population: planet.population,
                gravity: planet.gravity
            })
        })
    }

    render () {
        const { name, diameter, population, gravity } = this.state;

        return (
            <div className="planet">
                <div className="random_planet">
                    <h3>Planet {name} </h3>
                    <div>
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