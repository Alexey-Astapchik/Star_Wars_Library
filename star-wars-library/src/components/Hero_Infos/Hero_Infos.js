import React from 'react';

import '../Hero_Infos/Hero_Infos.css'
import SwapiServiceAPI from '../../services/SwapiServiceAPI'
import SwapiContext from '../SwapiContext/SwapiContext';
export default class Hero_Infos extends React.Component {
   
    swapi = new SwapiServiceAPI()

    state = {
        person: 1
    }

    componentDidUpdate() {

        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if(this.props.personID !== prevProps.personID){
            this.updatePerson()
        }
    }

    updatePerson() {
        const { personID } = this.props;

        if(!personID){
            return;
        }

        this.swapi.getPerson(personID).then((person) => {
            this.setState({person});
        })
    }
    
    render() {
        if(!this.state.person) {
            return <p>Please, select a hero</p>
        }

        const { id, name, mass, skincolor, gender } = this.state.person;
        
        return (
            <div className="hero_infos">
                <div className="block-with-info">
                    <h3>The Information about hero:</h3>
                    <h4>{name}</h4>
                    <div className="info_list">
                        <div className="pic_hero">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
                        </div>
                        <div className='parameters_list'>
                        <ul>
                            <li className="mass">
                                <p className='parametr'>Mass:</p>
                                <span>{mass}</span>
                            </li>
                            <li className="skin">
                                <p className='parametr'>Skin Color:</p>
                                <span>{skincolor}</span>
                            </li>
                            <li className="gender">
                                <p className='parametr'>Gender:</p>
                                <span>{gender}</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Hero_Infos.contextType = SwapiContext;