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
                    <img className="pic_hero" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
                        <ul>
                            <li className="mass">
                                <p className='parametr'>Mass:</p>
                                <p>{mass}</p>
                            </li>
                            <li className="skin">
                                <p className='parametr'>Skin Color:</p>
                                <p>{skincolor}</p>
                            </li>
                            <li className="gender">
                                <p className='parametr'>Gender:</p>
                                <p>{gender}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

Hero_Infos.contextType = SwapiContext;