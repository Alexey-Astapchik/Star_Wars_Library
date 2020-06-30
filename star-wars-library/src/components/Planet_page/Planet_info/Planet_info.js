import React from 'react';

import '../Planet_info/Planet_info.css'
import SwapiServiceAPI from '../../../services/SwapiServiceAPI'
import SwapiContext from '../../SwapiContext/SwapiContext';

export default class Planet_info extends React.Component {
   
    swapi = new SwapiServiceAPI();

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

        const { id, name, diameter} = this.state.planet;

        return (
            <div className="hero_infos">
                <div className="block-with-info">
                    <h3>The Information about planet:</h3>
                    <h4>{name}</h4>
                    <div className="info_list">
                    <img className="pic_hero" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                        <ul>
                            <li className="mass">
                                <p className='parametr'>Name:</p>
                                <p>{name}</p>
                            </li>
                            <li className="skin">
                                <p className='parametr'>Diametr:</p>
                                <p>{diameter}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

Planet_info.contextType = SwapiContext;