import React from 'react';

import '../Planet_info/Planet_info.css'
import SwapiServiceAPI from '../../../services/SwapiServiceAPI'
import SwapiContext from '../../SwapiContext/SwapiContext';


export default class Planet_info extends React.Component {
   
    swapi = new SwapiServiceAPI()

    state = {
        planet: 1
    }

    componentDidUpdate() {
        this.updatePlanet();
    }

    componentDidUpdate(prevProps) {
        if(this.props.planetID !== prevProps.planetID){
            this.updatePlanet()
        }
    }

    updatePlanet() {
        const { planetID } = this.props;

        if(!planetID){
            return;
        }
        this.swapi.getPlanet(planetID).then((planet) => {
            this.setState({planet});
        })
    }
    
    render() {
        if(!this.state.planet) {
            return <p>Please, select a planet</p>
        }

        const { id, name, diameter, population} = this.state.planet;

        return (
            <div className="hero_infos">
                <div className="block-with-info">
                    <h3>The Information about planet:</h3>
                    <h4>{name}</h4>
                    <div className="info_list">
                        <div className="pic_hero">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                        </div>
                        <div className='parameters_list'>
                            <ul>
                                <li className="mass">
                                    <p className='parametr'>Name:</p>
                                    <span>{name}</span>
                                </li>
                                <li className="skin">
                                    <p className='parametr'>Diametr:</p>
                                    <span>{diameter}</span>
                                </li>
                                <li className="mass">
                                    <p>Population:</p>
                                    <span> {population} </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Planet_info.contextType = SwapiContext;