import React from 'react';
import '../Planet/Planet.css';

import SwapiServiceAPI from '../../services/SwapiServiceAPI'
import Loader from '../Loader/Loader';
import ErrorComponent from '../ErrorComponent/ErrorComponent'

export default class Planet extends React.Component {

    swapi = new SwapiServiceAPI();

    state = {
        planet: {},
        load: true,
        error: false,
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onError = () => {
        this.setState({
            error: true,
            load: false,
        });
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            load: false,
        });
    }

    updatePlanet = () => {
        const id = Math.round(Math.random()*25);
        this.swapi.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet, load, error } = this.state;

        const errorContent = error ? <ErrorComponent /> : null;
        const loader = load ? <Loader /> : null;
        const content = (!load && !error)
            ? <PlanetView planet={planet} /> : null;

        return (
            <div className="RandomPlanet">
                {errorContent}
                {loader}
                {content}
            </div>
        );
    }

};

const PlanetView = (props) => {
    const { id, name, diameter, population, gravity } = props.planet;
    return (
        <div className="planet">
            <div className="random_planet">
                <h3>Planet: {name} </h3>
                <div className="pic_planet">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                </div>
                    <div className='planet_infos'> 
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